"use strict";

class DoctorsSearch {
    _filter = {}
    _busy = false
    _append = false
    _url = window.doctorsUrl
    _elFilterSelector = '.js-doctors-filter'
    _elContainerSelector = '.js-doctors-container'
    _elLoadmoreSelector = '.js-doctors-loadmore'
    _elFormSelector = '.js-doctors-form'
    _elPaginationSelector = '.js-doctors-pagination'

    constructor() {
        this._elFilter = document.querySelectorAll(this._elFilterSelector);
        this._elContainer = document.querySelector(this._elContainerSelector);
        this._elForm = document.querySelector(this._elFormSelector);
        this._elLoadMore = document.querySelector(this._elLoadmoreSelector);
        this._elPagination = document.querySelector(this._elPaginationSelector);

        this._elFilter.forEach((el) => {
            this._filter[el.getAttribute('name')] = el.value;
        });

        this._events()
    }

    _init() {

    }

    _events() {
        this._elForm.addEventListener('submit', (el) => {
            el.preventDefault()

            this._get(el.target)
        })
        this._update();
    }

    _update() {
        const elLoadmore = this._elContainer.querySelector(this._elLoadmoreSelector)

        if(!elLoadmore) return;

        elLoadmore.addEventListener('click', (e) => {
            let page = parseInt(this._elContainer.querySelector('input[name="PAGE"]').value),
                el = e.target;
            if (page < parseInt(el.dataset.pages)) {
                this._elContainer.querySelector('input[name="PAGE"]').value = page + 1;
                this._append = true;
                this._get(this._elForm);
            } else {
                el.parentElement.removeChild(el);
            }
        })
    }

    _get(form) {
        let target = this._elContainer.querySelector('.js-doctors-target'),
            pagination = this._elContainer.querySelector('.js-doctors-pagination'),
            data,
            page = 1;

        if (this._busy) return;

        data = new FormData(form);

        data.forEach((v, k) => {
            if (k === 'PAGE') page = parseInt(v);
        });

        this._busy = true;

        fetch(this._url, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            method: "POST",
            body: data
        })
            .then((response) => response.json())
            .then((data) => {
                this._busy = false;

                if (this._append) {
                    target.innerHTML += data.html;
                } else {
                    target.innerHTML = data.html;
                }
                this._elPagination.innerHTML = data.pagi;

                this._update();
                this._append = false;
            });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    new DoctorsSearch();
})