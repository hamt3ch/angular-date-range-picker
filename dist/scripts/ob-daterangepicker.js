/******/!function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}// webpackBootstrap
/******/
var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){a(1),e.exports=a(6)},function(e,t,a){"use strict";var n=a(2),i=a(3),r=a(4),s=a(5);angular.module("obDateRangePicker",[]).directive("dateRangePicker",n.DateRangePicker).directive("obDaterangepicker",r.ObDateRangePicker).directive("calendar",i.Calendar).directive("obDaypicker",s.ObDayPicker)},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){"ngInject";var e={restrict:"E",scope:{weekStart:"&",range:"=?","static":"=?",minDay:"&",maxDay:"&",api:"&",monthFormat:"&",inputFormat:"&",weekDaysName:"&",linkedCalendars:"&",interceptors:"&",turn:"&"},templateUrl:"app/directives/date-range-picker/date-range-picker.html",controller:s,controllerAs:"picker",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.DateRangePicker=n;var s=function(){function e(t,n){"ngInject";a(this,e),this.Moment=t,this.Scope=n,this.range=this.range||{},this["static"]=this["static"]||{},this.setConfigurations(),this.startCalendarApi={},this.endCalendarApi={},this.setInterceptors(),this.setListeners(),this.setApi(),this.watchRangeChange(),this.interceptors=this.interceptors()||{},this.minRangeDay=void 0,this.maxRangeDay=void 0,this.hovered=void 0}return e.$inject=["moment","$scope"],i(e,[{key:"setApi",value:function(){var e=this,t=this.api()||{};r(t,{setCalendarPosition:function(t,a){e.startCalendar=t,e.linkedCalendars()||t.isSame(a,"M")?(e.endCalendar=e.startCalendar.clone(),e.startCalendar=e.startCalendar.subtract(1,"M")):e.endCalendar=a},render:function(){e.startCalendarApi.render(),e.endCalendarApi.render()}})}},{key:"setListeners",value:function(){var e=this;this.Scope.$watchGroup([function(){return e.range.start},function(){return e.range.end}],function(t){t[0]&&t[1]&&e.setConfigurations()})}},{key:"setConfigurations",value:function(){var e=void 0,t=void 0;this.isMomentRange(this.range)?(e=this.range.start,t=this.range.end):(e=this.Moment(this.range.start,this.getFormat()),t=this.Moment(this.range.end,this.getFormat())),t=t.diff(e)>=0?t:e.clone(),this.rangeStart=e,this.rangeEnd=t,this.daysSelected=2,this.updateRange()}},{key:"updateRange",value:function(){this.isMomentRange(this.range)?(this.range.start=this.rangeStart,this.range.end=this.rangeEnd):(this.range.start=this.rangeStart?this.rangeStart.format(this.getFormat()):null,this.range.end=this.rangeEnd?this.rangeEnd.format(this.getFormat()):null)}},{key:"setInterceptors",value:function(){var e=this;this.startCalendarInterceptors={moveToPrevClicked:function(){e.moveCalenders(-1,"start")},moveToNextClicked:function(){e.moveCalenders(1,"start")},daySelected:function(t){e.dayInStartSelected(t),e.daySelected(t),2==e.daysSelected?(e.interceptors.secondDaySelected&&e.interceptors.secondDaySelected({start:e.rangeStart,end:e.rangeEnd}),e.minRangeDay=void 0,e.maxRangeDay=void 0):(e.interceptors.firstDaySelected&&e.interceptors.firstDaySelected({start:e.rangeStart,end:e.rangeEnd}),angular.isDefined(t.mo)?(e.minRangeDay=t.mo.clone(),e.maxRangeDay=t.mo.clone().add(29,"days")):(e.minRangeDay=t.clone(),e.maxRangeDay=t.clone().add(29,"days")))},inputSelected:function(t){e.inputInStartSelected(t)},dayHovered:function(t,a){e.onHover(t,a)}},this.endCalendarInterceptors={moveToPrevClicked:function(){e.moveCalenders(-1,"end")},moveToNextClicked:function(){e.moveCalenders(1,"end")},daySelected:function(t){e.dayInEndSelected(t),e.daySelected(t),2==e.daysSelected?(e.interceptors.secondDaySelected&&e.interceptors.secondDaySelected({start:e.rangeStart,end:e.rangeEnd}),e.minRangeDay=void 0,e.maxRangeDay=void 0):e.interceptors.firstDaySelected&&e.interceptors.firstDaySelected({start:e.rangeStart,end:e.rangeEnd})},inputSelected:function(t){e.inputInEndSelected(t)},dayHovered:function(t,a){e.onHover(t,a)}}}},{key:"inputInStartSelected",value:function(e){switch(this.daysSelected){case 0:case 1:this.rangeStart=e,this.daysSelected=1;break;case 2:e.diff(this.rangeStart,"days")<0?this.rangeStart=e:e.isBetween(this.rangeStart,this.rangeEnd)?this.rangeStart=e:e.diff(this.rangeEnd,"days")>=0&&(this.rangeStart=e,this.rangeEnd=e),this.daysSelected=2,this.updateRange()}}},{key:"inputInEndSelected",value:function(e){switch(this.daysSelected){case 0:this.rangeStart=e,this.daysSelected=1;break;case 1:case 2:e.diff(this.rangeStart,"days")<=0?(this.rangeStart=e,this.rangeEnd=e):e.isSame(this.startCalendar,"months")||e.isSame(this.endCalendar,"months")?this.rangeEnd=e:e.isSame(this.endCalendar,"months")||(this.rangeEnd=e),this.daysSelected=2,this.updateRange()}}},{key:"dayInStartSelected",value:function(e){var t=this.startCalendar.clone().add(1,"M");e.isSame(t,"month")&&this.dayInEndSelected(e)}},{key:"dayInEndSelected",value:function(e){var t=this.endCalendar.clone().subtract(1,"M");e.isSame(t,"month")&&this.dayInStartSelected(e)}},{key:"daySelected",value:function(e){var t=this.turn();"first"===t?(e.diff(this.rangeEnd,"days")<-29&&(this.rangeEnd=e.clone()),this.rangeStart=e,this.daysSelected=1):"second"===t&&(e.diff(this.rangeStart,"days")<0&&(this.rangeStart=e.clone()),this.rangeEnd=e,this.daysSelected=2),this.updateRange()}},{key:"onHover",value:function(e,t){t?angular.isDefined(e.mo)?this.dayHovered=e.mo.clone():this.dayHovered=e.clone():this.dayHovered=void 0}},{key:"moveCalenders",value:function(e,t){this.areCalendarsLinked()?(this.startCalendar=this.startCalendar.clone().add(e,"M"),this.endCalendar=this.endCalendar.clone().add(e,"M")):"start"===t?this.startCalendar=this.startCalendar.clone().add(e,"M"):this.endCalendar=this.endCalendar.clone().add(e,"M")}},{key:"isMomentRange",value:function(e){var t=!1;return e&&e.start&&e.end&&(t=this.Moment.isMoment(this.range.start)&&this.Moment.isMoment(this.range.end)),t}},{key:"watchRangeChange",value:function(){var e=this;this.Scope.$watchGroup([function(){return e.rangeStart},function(){return e.rangeEnd}],function(t,a){var n=t[0];t[1],a[0],a[1];e.startCalendar||e.endCalendar||(e.startCalendar=n,e.endCalendar=n.clone().add(1,"M")),e.startCalendar=n,e.endCalendar=n.clone().add(1,"M")})}},{key:"areCalendarsLinked",value:function(){return angular.isDefined(this.linkedCalendars())?this.linkedCalendars():!0}}]),e}()},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){"ngInject";var e={restrict:"E",scope:{minDay:"&",minRangeDay:"&",maxRangeDay:"&",maxDay:"&",weekStart:"&",getMonth:"&month",getInterceptors:"&interceptors",rangeStart:"&",rangeEnd:"&",selectedDay:"&",minMonth:"&",maxMonth:"&",weekDaysName:"&",monthFormat:"&",inputFormat:"&",showInput:"&",hovered:"&",api:"=?","static":"=?",turn:"&"},templateUrl:"app/directives/calendar/calendar.html",controller:s,controllerAs:"month",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.Calendar=n;var s=function(){function e(t,n,i){"ngInject";a(this,e),this.Moment=t,this.Scope=n,this.Attrs=i,this.api&&this.setApi(),this.firstRender()}return e.$inject=["moment","$scope","$attrs"],i(e,[{key:"setApi",value:function(){r(this.api,{render:this.render.bind(this)})}},{key:"firstRender",value:function(){this.defaultWeekDaysNames=this.weekDaysName()||["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],this.firstDayOfWeek=this.weekStart()||"su",this.daysOfWeek=this.buildWeek(this.firstDayOfWeek),this.calendar=this.buildCalendar(this.getMonth()),this.interceptors=this.getInterceptors()||{},this.setListeners(),this.daysName=this.setWeekDaysNames(this.daysOfWeek)}},{key:"render",value:function(){this.daysOfWeek=this.buildWeek(this.firstDayOfWeek)}},{key:"setValue",value:function(){this.selectedDay()&&(this.value=this.selectedDay().format(this.getInputFormat()))}},{key:"setWeekDaysNames",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?this.defaultWeekDaysNames:arguments[1],a=[],n={su:0,mo:1,tu:2,we:3,th:4,fr:5,sa:6};return e.forEach(function(e,i){var r=n[e];a[i]=t[r]}),a}},{key:"setListeners",value:function(){var e=this;this.Scope.$watch(function(){return e.getMonth()},function(t){e.calendar=e.buildCalendar(t)}),this.Scope.$watch(function(){return e.hovered()},function(t){e.updateDaysProperties(e.calendar.monthWeeks,t)}),this.Scope.$watchGroup([function(){return e.rangeStart()},function(){return e.rangeEnd()},function(){return e.turn()}],function(){e.setValue(),e.updateDaysProperties(e.calendar.monthWeeks)})}},{key:"updateDaysProperties",value:function(e){var t=this,a=this.minDay(),n=this.maxDay(),i=this.selectedDay(),r=this.rangeStart(),s=this.rangeEnd(),o=this.turn(),d=this.isHoverInRange(),c=this.minRangeDay(),l=this.maxRangeDay();"second"===o&&"undefined"==typeof l&&(c=r.clone(),l=r.clone().add(29,"days")),e.forEach(function(e){e.forEach(function(e){e.selected=e.mo.isSame(i||null,"day"),e.inRange=t.isInRange(e.mo),e.rangeStart=e.mo.isSame(r||null,"day"),e.rangeEnd=e.mo.isSame(s||null,"day"),e.inStaticRange=t.isInStaticRange(e.mo),e.staticRangeStart=e.mo.isSame(t["static"].start||null,"day"),e.staticRangeEnd=e.mo.isSame(t["static"].end||null,"day"),"second"===o&&"undefined"!=typeof t.hovered()?(e.inRange=t.isInSecondHoverRange(e.mo,l),e.inRange?(e.rangeEnd=!1,e.selected=!1):(e.rangeStart=!1,e.rangeEnd=!1,e.selected=!1,e.inRange=!1)):"first"===o&&"undefined"!=typeof t.hovered()&&(d===!0?(e.inRange=t.isInFirstHoverRange(e),e.rangeStart=!1,e.selected=!1):(e.rangeStart=!1,e.rangeEnd=!1,e.selected=!1,e.inRange=!1)),a&&(e.disabled=e.mo.isBefore(a,"day")),n&&!e.disabled?e.disabled=e.mo.isAfter(n,"day"):e.disabled=!1,!e.disabled&&angular.isDefined(c)&&(e.disabled=e.mo.isAfter(l,"day"))})})}},{key:"buildWeek",value:function(e){var t=["su","mo","tu","we","th","fr","sa"],a=t.indexOf(e.toLowerCase()),n=t.slice(0,a),i=t.slice(a,t.length),r=i.concat(n);return r}},{key:"buildCalendar",value:function(){for(var e=arguments.length<=0||void 0===arguments[0]?this.Moment():arguments[0],t=[[],[],[],[],[],[]],a=this.getMonthDateRange(e.year(),e.month()+1),n=a.start,i=this.daysOfWeek.indexOf(n.format("dd").toLowerCase()),r=n.clone().subtract(i,"d"),s=0;6>s;s++)for(var o=0;7>o;o++)t[s][o]={mo:r,currentDay:r.isSame(this.Moment(),"day"),currentMonth:r.isSame(e,"month")},r=r.clone().add(1,"d");return this.updateDaysProperties(t),{currentCalendar:e,selectedDate:e,firstDayOfMonth:a.start.format("D"),lastDayOfMonth:a.end.format("D"),monthWeeks:t}}},{key:"moveCalenderByMonth",value:function(e){var t=this.calendar.currentCalendar;this.month=t.clone().add(e,"M"),this.calendar=this.buildCalendar(this.month.clone())}},{key:"moveToNext",value:function(){this.interceptors.moveToNextClicked?this.interceptors.moveToNextClicked.call(this.interceptors.context):this.moveCalenderByMonth(1)}},{key:"moveToPrev",value:function(){this.interceptors.moveToPrevClicked?this.interceptors.moveToPrevClicked.call(this.interceptors.context):this.moveCalenderByMonth(-1)}},{key:"getMonthDateRange",value:function(e,t){var a=this.Moment([e,t-1]),n=this.Moment(a).endOf("month");return{start:a,end:n}}},{key:"isInRange",value:function(e){var t=!1,a=this.rangeStart()||null,n=this.rangeEnd()||null;return t=e.isBetween(a,n)||e.isSame(a,"day")||t||e.isSame(n,"day")}},{key:"isInHoverRange",value:function(e){var t=!1,a=this.rangeStart()||null,n=this.hovered()||null;return t=e.isBetween(a,n)||e.isSame(n,"day")}},{key:"isHoverInRange",value:function(){var e=this.hovered()||null,t=this.rangeEnd().clone().subtract(29,"days")||null,a=this.rangeEnd()||null;return null!==e?e.isBetween(t,a):void 0}},{key:"isInFirstHoverRange",value:function(e){var t="undefined"!=typeof e.mo?e.mo:e,a=!1,n=this.rangeEnd()||null,i=this.hovered()||null;return a=t.isBetween(i,n)||t.isSame(i,"day")}},{key:"isInSecondHoverRange",value:function(e,t){var a="undefined"!=typeof e.mo?e.mo:e,n=!1,i=this.hovered()||null,r=this.rangeStart()||null;return(a.isBetween(r,t.endOf("day"))||a.format("MM-DD-YYYY")==r.format("MM-DD-YYYY"))&&(n=a.isBetween(r,i)||a.isSame(r,"day")||a.isSame(i,"day"),i.diff(r,"days")<0&&(n=!1)),n}},{key:"isOutOfFirstHoverRange",value:function(){var e=!1,t=this.rangeEnd()||null,a=this.hovered()||null;return e=a.diff(t,"days")<-29}},{key:"isInStaticRange",value:function(e){var t=!1,a=this["static"].start||null,n=this["static"].end||null;return t=e.isBetween(a,n)||e.isSame(a,"day")||t||e.isSame(n,"day")}},{key:"daySelected",value:function(e){this.dayHovered(e,!1),e.disabled||this.interceptors.daySelected&&this.interceptors.daySelected.call(this.interceptors.context,e.mo)}},{key:"dayHovered",value:function(e,t){e.disabled||this.interceptors.dayHovered&&this.interceptors.dayHovered.call(this.interceptors.context,e.mo,t)}},{key:"dateInputEntered",value:function(e,t){13==e.keyCode&&(this.dateInputSelected(e,t),e.preventDefault())}},{key:"dateInputSelected",value:function(e,t){var a=this.Moment(t,this.getInputFormat(),!0);if(a.isValid()){var n=this.minDay(),i=this.maxDay();a=n&&a.isBefore(n,"day")?n:a,a=i&&a.isAfter(i,"day")?i:a,this.selectedDay()&&this.selectedDay().isSame(a,"day")||(this.interceptors.inputSelected?this.interceptors.inputSelected(a):this.daySelected({mo:a}))}}},{key:"getFormattedMonth",value:function(e){return this.Moment(e).format(this.getMonthFormat())}},{key:"getMonthFormat",value:function(){return this.monthFormat()||"MMMM YYYY"}},{key:"getInputFormat",value:function(){return this.inputFormat()||"MMM DD, YYYY"}},{key:"showLeftArrow",value:function(){return this.minMonth()?!this.minMonth().isSame(this.getMonth().clone().subtract(1,"M"),"M"):!0}},{key:"showRightArrow",value:function(){return this.maxMonth()?!this.maxMonth().isSame(this.getMonth().clone().add(1,"M"),"M"):!0}},{key:"_showInput",value:function(){return angular.isDefined(this.showInput())?this.showInput():!0}}]),e}()},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){"ngInject";var e={restrict:"E",scope:{weekStart:"&",range:"=?","static":"=?",weekDaysName:"&",format:"&",ranges:"&",minDay:"&",maxDay:"&",monthFormat:"&",inputFormat:"&",onApply:"&",linkedCalendars:"&",autoApply:"&",firstDayChange:"&",secondDayChange:"&",disabled:"&",calendarsAlwaysOn:"&",turn:"&",api:"=?"},controller:o,templateUrl:"app/directives/ob-date-range-picker/ob-date-range-picker.html",controllerAs:"obDateRangePicker",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){var a=[],n=!0,i=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(d){i=!0,r=d}finally{try{!n&&o["return"]&&o["return"]()}finally{if(i)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.ObDateRangePicker=n;var o=function(){function e(t,n,i,r){"ngInject";var o=this;a(this,e),this.Element=n,this.Document=t,this.Scope=i,this.Moment=r,this.range=this.range||{},this["static"]=this["static"]||{},this.pickerApi={},this.isCustomVisible=this.calendarsAlwaysOn(),this.setOpenCloseLogic(),this.setWatchers(),this.value="Select a Range",this.api&&s(this.api,{setDateRange:this.setDateRange.bind(this),render:function(){o.render(),o.pickerApi.render()}}),this.preRanges=this.ranges()||[],this.preRanges.length?this.preRanges.push({name:"Custom",isCustom:!0}):this.isCustomVisible=!0,this.render(),this.setListeners()}return e.$inject=["$document","$element","$scope","moment"],r(e,[{key:"render",value:function(){if(this._range={start:this.Moment(),end:this.Moment()},this.setPredefinedStatus(),this.range.start&&this.range.end&&!this.Moment.isMoment(this.range.start)&&!this.Moment.isMoment(this.range.end)&&this.format())this._range={start:this.Moment(this.range.start,this.getFormat()),end:this.Moment(this.range.end,this.getFormat())};else if(this.Moment.isMoment(this.range.start)&&this.Moment.isMoment(this.range.end))this._range={start:this.range.start,end:this.range.end};else if(this.preRanges.length>1){var e=this.preRanges[0];this._range.start=e.start,this._range.end=e.end}this._range.start.isAfter(this._range.end)?this._range.start=this._range.end.clone():this._range.end.isBefore(this._range.start)&&(this._range.end=this._range.start.clone()),this.applyMinMaxDaysToRange(),this.setRange(),this.markPredefined(this._range.start,this._range.end),this.setPickerInterceptors()}},{key:"applyMinMaxDaysToRange",value:function(){if(this.minDay()){var e=this._getMinDay();this._range.start=this._range.start.isBefore(e,"d")?e:this._range.start,this._range.end=this._range.end.isBefore(e,"d")?e:this._range.end}if(this.maxDay()){var t=this._getMaxDay();this._range.start=this._range.start.isAfter(t)?t:this._range.start,this._range.end=this._range.end.isAfter(t)?t:this._range.end}}},{key:"setPickerInterceptors",value:function(){var e=this;this.pickerInterceptors={firstDaySelected:function(t){e.firstDayChange({days:t})},secondDaySelected:function(t){e.secondDayChange({days:t})},rangeSelectedByClick:function(){e.applyChanges()}}}},{key:"setPredefinedStatus",value:function(){var e=this;this.preRanges.forEach(function(t){if(!t.isCustom){if(t.disabled=!1,e.minDay()){var a=e._getMinDay();t.disabled=t.start.isBefore(a,"d")}if(!t.disabled&&e.maxDay()){var n=e._getMaxDay();t.disabled=t.end.isAfter(n,"d")}}})}},{key:"setWatchers",value:function(){var e=this;this.Scope.$watchGroup([function(){return e._range.start},function(){return e._range.end}],function(t){var a=i(t,2),n=a[0],r=a[1];e.selfChange||n&&r&&(e.preRanges.length&&(e.preRanges[e.preRanges.length-1].start=n,e.preRanges[e.preRanges.length-1].end=r,e.markPredefined(n,r)),e.value=e.getRangeValue()),e.selfChange=!1})}},{key:"setOpenCloseLogic",value:function(){this.isPickerVisible=!1,this.pickerPopup=angular.element(this.Element[0].querySelector(".picker")),this.elemClickFlag=!1}},{key:"setListeners",value:function(){var e=this,t={documentClick:function(){e.elemClickFlag?e.elemClickFlag=!1:(e.isPickerVisible&&e.discardChanges(),e.Scope.$apply())},documentEsc:function(t){27==t.keyCode&&e.isPickerVisible&&(e.discardChanges(),e.hidePicker(),e.Scope.$apply())},pickerClick:function(){e.elemClickFlag=!0,e.Scope.$apply()}};this.pickerPopup.on("click",t.pickerClick.bind(this)),this.Document.on("click",t.documentClick.bind(this)),this.Document.on("keydown",t.documentEsc.bind(this)),this.Scope.$on("$destroy",function(){e.pickerPopup.off("click",t.pickerClick),e.Document.off("click",t.documentClick),e.Document.off("keydown",t.documentClick)})}},{key:"togglePicker",value:function(){var e=angular.isDefined(this.disabled())?this.disabled():!1;e||this.isPickerVisible?this.isPickerVisible=!1:(this.isPickerVisible=!0,this.elemClickFlag=!0)}},{key:"setRange",value:function(){var e=arguments.length<=0||void 0===arguments[0]?this._range:arguments[0];this.format()?(this.range.start=e.start.format(this.getFormat()),this.range.end=e.end.format(this.getFormat())):(this.range.start=e.start,this.range.end=e.end)}},{key:"predefinedRangeSelected",value:function(e,t){e.disabled||(e.isCustom?this.isCustomVisible=!0:(this.selfChange=!0,this.selectedRengeIndex=t,this.value=e.name,this._range.start=e.start,this._range.end=e.end,this.isCustomVisible=this.calendarsAlwaysOn()||!1,this.applyChanges()))}},{key:"getFormat",value:function(){return this.format()||"MM-DD-YYYY"}},{key:"discardChanges",value:function(){var e=this.getFormat(),t=this.Moment(this.range.start,e),a=this.Moment(this.range.end,e);this._range.start=t,this._range.end=a,this.value=this.getRangeValue(),this.pickerApi.setCalendarPosition(t,a),this.hidePicker()}},{key:"markPredefined",value:function(e,t){this.selectedRengeIndex=this.preRanges.findIndex(function(a){return e.isSame(a.start,"day")&&t.isSame(a.end,"day")})}},{key:"getRangeValue",value:function(){var e=this,t=void 0,a=this.getInputFormat();if(this.preRanges.length){var n=this.preRanges.findIndex(function(t){return e._range.start.isSame(t.start,"day")&&e._range.end.isSame(t.end,"day")});-1!==n&&(t=this.preRanges[n].isCustom?this.preRanges[n].start.format(a)+" - "+this.preRanges[n].end.format(a):this.preRanges[n].name)}else t=this._range.start.format(a)+" - "+this._range.end.format(a);return t}},{key:"applyChanges",value:function(){var e=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];this.setRange(),e&&this.onApply&&this.onApply({start:this._range.start,end:this._range.end})}},{key:"getInputFormat",value:function(){return this.inputFormat()||"MMM DD, YYYY"}},{key:"setDateRange",value:function(e){this._range.start=e.start,this._range.end=e.end,this.applyChanges(!1)}},{key:"_getMinDay",value:function(){return this.minDay()?this.Moment(this.minDay(),this.getFormat()):void 0}},{key:"_getMaxDay",value:function(){return this.maxDay()?this.Moment(this.maxDay(),this.getFormat()):void 0}}]),e}()},function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){"ngInject";var e={restrict:"E",scope:{weekStart:"&",selectedDay:"=?",weekDaysName:"&",format:"&",minDay:"&",maxDay:"&",monthFormat:"&",inputFormat:"&",onApply:"&",disabled:"&",formName:"@name",isValidDateEnabled:"&validDay",autoApply:"&",api:"=?"},controller:s,templateUrl:"app/directives/ob-day-picker/ob-day-picker.html",controllerAs:"dayPicker",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.ObDayPicker=n;var s=function(){function e(t,n,i,s,o){"ngInject";var d=this;a(this,e),this.Element=n,this.Document=t,this.Scope=i,this.$timeout=s,this.Moment=o,this.formName=this.formName||"dayPickerInput",this.setOpenCloseLogic(),this._selectedDay=this.getSelectedDay(),this.value=this.Moment(this._selectedDay).format(this.getFormat()),this.setCalendarInterceptors(),this.calendarApi={},this.api&&r(this.api,{render:function(){d.render()}}),this.setListeners(),this.dayValidity=this.checkIfDayIsValid(this._selectedDay),this.$timeout(function(){d.applyValidity(d.dayValidity)})}return e.$inject=["$document","$element","$scope","$timeout","moment"],i(e,[{key:"render",value:function(){this.dayValidity=this.checkIfDayIsValid(this._selectedDay),this.applyValidity(this.dayValidity),this.calendarApi.render&&this.calendarApi.render()}},{key:"setOpenCloseLogic",value:function(){this.isPickerVisible=!1,this.pickerPopup=angular.element(this.Element[0].querySelector(".picker")),this.elemClickFlag=!1}},{key:"setCalendarInterceptors",value:function(){this.calendarInterceptors={daySelected:this.daySelected.bind(this)}}},{key:"setListeners",value:function(){var e=this,t={documentClick:function(){e.elemClickFlag?e.elemClickFlag=!1:(e.onBlur(),e.Scope.$digest())},pickerClick:function(){e.elemClickFlag=!0,e.Scope.$digest()}};this.pickerPopup.on("click",t.pickerClick.bind(this)),this.Document.on("click",t.documentClick.bind(this)),this.Scope.$on("$destroy",function(){e.pickerPopup.off("click",t.pickerClick),e.Document.off("click",t.documentClick)}),this.Scope.$watchGroup([function(){return e.Moment(e.minDay(),e.getFormat()).format()},function(){return e.Moment(e.maxDay(),e.getFormat()).format()}],function(t,a){(t&&t[0]||a&&a[0])&&e.render()})}},{key:"showPicker",value:function(){var e=angular.isDefined(this.disabled())?this.disabled():!1;e||this.isPickerVisible||(this.isPickerVisible=!0),this.elemClickFlag=!0}},{key:"hidePicker",value:function(){this.isPickerVisible=!1}},{key:"daySelected",value:function(e){var t=this,a=arguments.length<=1||void 0===arguments[1]?100:arguments[1];this.applyValidity(this.checkIfDayIsValid(e)),e.isSame(this._selectedDay,"day")?this.hidePicker():(this.calendarApi.render(),this.value=this.Moment(e).format(this.getFormat()),this._selectedDay=e,this.$timeout(function(){t.hidePicker(),t.updateSelectedDate(e)},a))}},{key:"dateInputEntered",value:function(e,t){var a=this.checkIfDayIsValid(t);switch(e.keyCode){case 9:case 13:var n=this.getInputValue();a?this.daySelected(n,0):(this.hidePicker(),13===e.keyCode&&e.preventDefault());break;case 40:this.isPickerVisible=!0;break;case 27:this.isPickerVisible=!1,this.value=this._selectedDay.format(this.getFormat())}}},{key:"getInputValue",value:function(){return this.Moment(this.value,this.getFormat(),!0)}},{key:"onBlur",value:function(){var e=this.getInputValue(),t=this.checkIfDayIsValid(e);t?this.daySelected(e):this.hidePicker()}},{key:"updateValidity",value:function(){var e=this.getInputValue(),t=this.checkIfDayIsValid(e);this.applyValidity(t),t&&this.autoApply()&&!e.isSame(this._selectedDay,"day")&&(this._selectedDay=e,this.updateSelectedDate(e))}},{key:"checkIfDayIsValid",value:function(e){var t=this.Moment(e,this.getFormat(),!0),a=this._getMinDay(),n=this._getMaxDay(),i=t.isValid();return i&&a&&(i=t.isAfter(a,"day")||t.isSame(a,"day")),i&&n&&(i=t.isBefore(n,"day")||t.isSame(n,"day")),i}},{key:"applyValidity",value:function(e){this.Scope[this.formName]&&(this.disabled&&this.disabled()?(this.Scope[this.formName].$setValidity("validDay",!0),this.dayValidity=!0):this.isValidDateEnabled()&&this.Scope[this.formName]&&(this.Scope[this.formName].$setValidity("validDay",e),this.dayValidity=e))}},{key:"updateSelectedDate",value:function(){var e=arguments.length<=0||void 0===arguments[0]?this._selectedDay:arguments[0];this.format()?this.selectedDay=e.format(this.getFormat()):this.selectedDay=e,this.onApply({day:this.selectedDay})}},{key:"getSelectedDay",value:function(){return this.Moment(this.selectedDay||this.Moment(),this.getFormat())}},{key:"getFormat",value:function(){return this.format()||"MMM DD, YYYY"}},{key:"_getMinDay",value:function(){return this.minDay()?this.Moment(this.minDay(),this.getFormat()):void 0}},{key:"_getMaxDay",value:function(){return this.maxDay()?this.Moment(this.maxDay(),this.getFormat()):void 0}}]),e}()},function(e,t){"use strict";Array.prototype.findIndex||(Array.prototype.findIndex=function(e){if(null===this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,a=Object(this),n=a.length>>>0,i=arguments[1],r=0;n>r;r++)if(t=a[r],e.call(i,t,r,a))return r;return-1})}]),angular.module("obDateRangePicker").run(["$templateCache",function(e){e.put("app/directives/calendar/calendar.html",'<div class="input-container" ng-if="month._showInput()"></div><div class="header"><span class="arrow-btn left" ng-if="month.showLeftArrow()" ng-click="month.moveToPrev()">◀</span> <span class="date">{{month.getFormattedMonth(month.calendar.currentCalendar)}}</span> <span class="arrow-btn right" ng-if="month.showRightArrow()" ng-click="month.moveToNext(1)">▶</span></div><div class="board"><div class="days-of-week"><span class="day-name" ng-repeat="day in month.daysName track by $index">{{day}}</span></div><table class="weeks"><tbody><tr class="week" ng-repeat="week in month.calendar.monthWeeks track by $index"><td class="day" ng-repeat="day in week track by $index" ng-class="{ \'selected\': day.selected, \'current\': day.currentDay, \'other-month\': !day.currentMonth, \'in-range\': day.inRange, \'in-hover-range\': day.inHoverRange, \'range-start\': day.rangeStart, \'range-end\': day.rangeEnd, \'disabled\': day.disabled, \'in-static-range\': day.inStaticRange, \'static-range-start\': day.staticRangeStart, \'static-range-end\': day.staticRangeEnd, }" ng-click="month.daySelected(day)" ng-mouseover="month.dayHovered(day, true)" ng-mouseleave="month.dayHovered(day, false)">{{day.mo.format(\'D\')}}</td></tr><tbody></tbody></tbody></table></div>'),e.put("app/directives/date-range-picker/date-range-picker.html",'<calendar class="calendar" api="picker.startCalendarApi" min-day="picker.minDay()" max-day="picker.maxDay()" min-range-day="picker.minRangeDay" max-range-day="picker.maxRangeDay" week-start="picker.weekStart()" month="picker.startCalendar" interceptors="picker.startCalendarInterceptors" range-start="picker.rangeStart" range-end="picker.rangeEnd" hovered="picker.dayHovered" selected-day="picker.rangeStart" max-month="picker.endCalendar" week-days-name="picker.weekDaysName()" month-format="picker.monthFormat()" input-format="picker.inputFormat()" label="Start Date" static="picker.static" turn="picker.turn()"></calendar><calendar class="calendar" api="picker.endCalendarApi" min-day="picker.minDay()" max-day="picker.maxDay()" min-range-day="picker.minRangeDay" max-range-day="picker.maxRangeDay" week-start="picker.weekStart()" month="picker.endCalendar" interceptors="picker.endCalendarInterceptors" range-start="picker.rangeStart" range-end="picker.rangeEnd" hovered="picker.dayHovered" selected-day="picker.rangeEnd" min-month="picker.startCalendar" week-days-name="picker.weekDaysName()" month-format="picker.monthFormat()" input-format="picker.inputFormat()" label="End Date" static="picker.static" turn="picker.turn()"></calendar>'),e.put("app/directives/ob-date-range-picker/ob-date-range-picker.html",'<div class="date-range"><date-range-picker api="obDateRangePicker.pickerApi" interceptors="obDateRangePicker.pickerInterceptors" linked-calendars="obDateRangePicker.linkedCalendars()" week-start="obDateRangePicker.weekStart()" range="obDateRangePicker._range" static="obDateRangePicker.static" week-days-name="obDateRangePicker.weekDaysName()" min-day="obDateRangePicker._getMinDay()" max-day="obDateRangePicker._getMaxDay()" month-format="obDateRangePicker.monthFormat()" input-format="obDateRangePicker.inputFormat()" turn="obDateRangePicker.turn()"></date-range-picker></div>'),e.put("app/directives/ob-day-picker/ob-day-picker.html",'<div ng-form="{{::dayPicker.formName}}" class="picker-dropdown-container" ng-class="{\'open\': dayPicker.isPickerVisible, \'disabled\': dayPicker.disabled(), \'invalid\': !dayPicker.dayValidity}"><input class="picker-input" ng-model="dayPicker.value" ng-change="dayPicker.updateValidity()" ng-keydown="dayPicker.dateInputEntered($event, dayPicker.value)" ng-click="dayPicker.showPicker()" ng-disabled="dayPicker.disabled()"><div class="picker" ng-show="dayPicker.isPickerVisible"><calendar class="calendar" api="dayPicker.calendarApi" min-day="dayPicker._getMinDay()" max-day="dayPicker._getMaxDay()" week-start="dayPicker.weekStart()" month="dayPicker._selectedDay" interceptors="dayPicker.calendarInterceptors" selected-day="dayPicker._selectedDay" min-month="dayPicker.startCalendar" week-days-name="dayPicker.weekDaysName()" month-format="dayPicker.monthFormat()" show-input="false"></calendar></div></div>');
}]);
//# sourceMappingURL=../maps/scripts/ob-daterangepicker.js.map
