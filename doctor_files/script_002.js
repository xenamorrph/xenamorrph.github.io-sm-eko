"use strict";
$(document).ready(function() {
	// Скрипт запись к доктору

	var _calendar = {
		inputFormat: '',
		outputFormat: '',
		month: [],
		date: {},
		controlPrev: '',
		controlNext: '',
		elements: [],
		selectedDate: '',
		labels: {
			months: [
				'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
			]
		},
		activeDate: [],
		init: function(options){
			var self = this;

			self.date = options.date ? options.date : new Date();
			self.minDate = options.minDate ? options.minDate.getTime() : false;
			self.maxDate = options.maxDate ? options.maxDate.getTime() : false;
			self.controlPrev = options.prev ? options.prev : '.calendar__prev';
			self.controlNext = options.next ? options.next : '.calendar__next';
			self.elements = options.elements ? options.elements : ['#calendar'];

			$(self.controlPrev).click(function(){
				self.prev();
			});
			$(self.controlNext).click(function(){
				self.next();
			});

			//self.getMonth();
			self.render();
		},
		render: function(){
			var self = this,
				year = self.date.getFullYear(),
				month = self.date.getMonth();

			for(var el in self.elements){
				var container = $(self.elements[el]).find('.calendar__days'),
					header = $(self.elements[el]).find('.calendar__header'),
					date = new Date(self.date.getFullYear(), self.date.getMonth() + 1*el),
					days;

				days = self.getMonth(date);
				self.renderMonth(container, days);
				self.renderHeader(header, date);
			}
		},
		renderHeader: function(element, date){
			var self = this;

			element.find('.calendar__month').text(self.labels.months[date.getMonth()]);
			element.find('.calendar__year').text(date.getFullYear());
		},
		renderYear: function(){

		},
		renderDay: function(){

		},
		renderMonth: function(element, arMonth){
			var self = this,
				arMonth = arMonth ? arMonth : [],
				html = '',
				output = '';


			element.find('div').each(function(){
				$(this).unbind('click');
			});
			element.empty();
			

/*			var container = document.getElementById('#cal');

			while (container.firstChild) {
				container.removeChild(container.firstChild);
			}*/

			for(var prop in arMonth){
				
				if(prop%7 == 0 && prop != 0){
					output += '<div class="calendar__week">'+html+'</div>';
					html = '';
				}
				if(self.activeDate.indexOf(arMonth[prop].date) != -1 && arMonth[prop].enable == true){
					html += '<div class="avalaible" data-date="'+arMonth[prop].date+'"><span>'+arMonth[prop].num+'</span></div>';
				} else {
					html += '<div class="disable" data-date="'+arMonth[prop].date+'"><span>'+arMonth[prop].num+'</span></div>';	
				}

			}
			if(html != '') output += '<div class="calendar__week">'+html+'</div>';

			element.append(output);
			element.find('.calendar__week div.avalaible').each(function(){
				$(this).bind('click', function(){
					if(self.selectedDate){
						self.selectedDate.removeClass('selected');
					}
					self.selectedDate = $(this);
					$(this).addClass('selected');
				});
			});
		},
		getMonth: function(date){
			var self = this,
				date = date ? date : new Date(),
				year = date.getFullYear(),
				month = date.getMonth(),
				prevMonth = month > 0 ? month-1 : 11,
				nextMonth = month == 11 ? 0 : month+1,
				strMonth = month+1 < 10 ? '0'+(month+1) : month+1,
				strPrevMonth = prevMonth+1 < 10 ? '0'+(prevMonth+1) : prevMonth+1,
				strNextMonth = nextMonth+1 < 10 ? '0'+(nextMonth+1) : nextMonth+1,
				firstDay = new Date(year, month+1).getDate(),
				lastDay = new Date(year, month+1, 0).getDate(),
				lastDayPrevMonth = new Date(year, month,0).getDate(),
				firstDayNum = new Date(year, month, 1).getDay(),
				lastDayNum = new Date(year, month+1, 0).getDay(),
				temp = [],
				j = 1,
				d = '',
				strDay;

			for(var i = firstDay; i <= lastDay; i++){
				if(firstDayNum > j){
					for(; j < firstDayNum; j++){
						strDay = (lastDayPrevMonth - j) < 10 ? '0'+(lastDayPrevMonth - j) : (lastDayPrevMonth - j);

						d = year+'-'+strPrevMonth+'-'+strDay;
						//temp[d] = {num: i, date: d};
						temp.push({num: '', date: d, enable: false});
						//temp.push({num: ''});
					}
				}
				strDay = i < 10 ? '0'+i : i;
				d = year+'-'+strMonth+'-'+strDay;
				//temp[d] = {num: i, date: d};
				temp.push({num: i, date: d, enable: true});
				if(i == lastDay){
					//j = lastDayNum
					i = i + j;
					var n = 1;
					for(; i <= 42; i++){
						strDay = n < 10 ? '0'+n : n;
						d = year+'-'+strNextMonth+'-'+strDay;
						//temp[d] = {num: n, date: d};
						temp.push({num: '', date: d, enable: false});
						n++;
						//temp.push({num: ''});
					}
				}
			}

			return temp;
			//self.renderMonth(temp);

		},
		getCurrent: function(){

		},
		getPrev: function(){

		},
		getNext: function(){

		},
		setDates: function(arDates){
			this.activeDate = arDates;
			this.render();
		},
		prev: function(){
			var self = this,
				date = new Date(self.date.getFullYear(), self.date.getMonth()-1);

			if(date.getTime() > self.minDate){
				self.date = date;
				self.render();
			}
		},
		next: function(){
			var self = this,
				date = new Date(self.date.getFullYear(), self.date.getMonth()+1);

			if(date.getTime() < self.maxDate){
				self.date = date;
				self.render();
			}
		}
	};

	var date = new Date();
	_calendar.init(
		{
			date: date,
			minDate: new Date(date.getFullYear(), date.getMonth() - 2),
			maxDate: new Date(date.getFullYear(), date.getMonth() + 2),
			next: '#cal .calendar__next',
			prev: '#cal .calendar__prev',
			elements: ['#cal']
		}
	);

})