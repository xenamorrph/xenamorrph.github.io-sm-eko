
// document.addEventListener('DOMContentLoaded', function(){

//     setInterval(() => {

//         fetch(window.pageBuilderUrl, {
//             headers: {
//                 'X-Requested-With': 'XMLHttpRequest'
//             },
//             method: "POST",
//             body: data
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 //if(data.success){
//                 this._busy = false;
//                 this._getContainer(el).querySelector(this._elLoadingSelector).classList.remove('active');

//                 if(this._append){
//                     target.innerHTML += data.html;
//                 } else {
//                     target.innerHTML = data.html;
//                 }
//                 pagination.innerHTML = data.pagi;

//                 this._resetState();

//                 this._update();
//                 this._append = false;
//             });

//     }, 2000);

//     window.ymap.init(
//         [
//             [
//                 '#map',
//                 function(ymap){
//                     let myCol = new ymaps.GeoObjectCollection();

//                     for(var i = 0; i < mapPoints.length; i++){

//                         let pm = new ymaps.Placemark(
//                             mapPoints[i].coords,
//                             mapPoints[i].options[0],
//                             mapPoints[i].options[1]
//                         );

//                         myCol.add(pm);
//                     }

//                     ymap.controls.remove('searchControl');
//                     ymap.controls.remove('trafficControl');
//                     ymap.controls.remove('typeSelector');
//                     ymap.controls.remove('fullscreenControl');
//                     ymap.controls.remove('rulerControl');
//                     ymap.controls.remove('geolocationControl');
//                     ymap.behaviors.disable('scrollZoom');

//                     ymap.geoObjects.add(myCol);

//                     ymap.setBounds(myCol.getBounds());
//                     //ymap.setZoom(15);

//                     let items = document.querySelectorAll('.b-addresses__button');
//                     items.forEach((el) => {
//                         el.addEventListener('click', (e) => {
//                             let id = e.target.dataset.id;
//                             ymaps
//                                 .geoQuery(ymap.geoObjects)
//                                 .each(function(pm) {
//                                     if(~id.indexOf(pm.properties.get('id'))){
//                                         pm.options.set('visible', true);
//                                     } else {
//                                         pm.options.set('visible', false);
//                                     }
//                                 });
//                             ymap.setBounds(ymaps
//                                 .geoQuery(ymap.geoObjects)
//                                 .search('options.visible = true').getBounds(), {checkZoomRange: true, zoomMargin:100}).then(function(){ if(ymap.getZoom() > 15) ymap.setZoom(15);});
//                         })
//                     })
//                 }
//             ]
//         ]
//     );

// })