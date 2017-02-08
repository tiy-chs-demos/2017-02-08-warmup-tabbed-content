(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//-------------------------------------
//TASK : Tabbed Content
// When a user selects a tab (e.g. <span class="tabcontent__tab" data-tab="press">Press</span>)
//    it should 
//       (1) give that element a class of 'active'
//       (2) remove the class of active from the <span> element that is no longer active
//       (3) inject the relevant HTML content into <div class="tabcontent__content">
//            (the html content is included below )
//-------------------------------------

var membershipHtml = '\n\t<div class="main">\n\t\t \n\t<h2>Join Us Today!</h2>\n\t<p>You can be part of the Paley Center community as an <em>Individual Member</em>, <em>Patron Member</em>, <em>Media Council Member</em>, or <em>Corporate Member</em>. All include very special benefits for YOU while supporting the Paley Center\u2019s essential programs.</p>\n\t<p class="smalltext">The Paley Center is a 501(c)3 nonprofit organization; our work and programs are dependent on your support.</p>\n\t\t \n\t</div>\n';
var screeningsHtml = '\n\t<h2>Screenings</h2>\n\t<p>Saturdays and Sundays in New York and Los Angeles</p>\n\t<p>12:15 to 4:00 pm local time \u2022 FREE Admission</p>\n\n\t<a href="#"> Visit New York</a>  |  <a>Visit Los Angeles</a>\n\n\t<p>Weekend Screenings from the Paley Archive on the Big Screen in NY & LA offer great family entertainment, PLUS programming selected by our Members and screened for the public. You haven\'t really experienced TV until you\'ve seen it on a movie-size screen with fellow fans.</p>\n';
var pressHtml = '\n\t\t<h2>Press</h2>\n\t\t<hr/>\n\t\t\n\t\t<h4>Current Press Releases</h4>\n\t\t<p><small>Read More</small></p>\n\t\t<hr/>\n\t\t<h4>Press Release Archive</h4>\n\t\t<p><small>Read More</small>\n\t\t<hr/>\n\t\t<h4>Press Kit/Logos</h4>\n\t\t<p>View and download press materials.</p>\n\t\t<p><small>Read More</small>\n\t\t<hr/>\n\n\t\t<h4>Register for Press Information</h4>\n\t\t<p><small>Click to fill out the form</small></p>\n';
var programsHtml = '\n\t<h2>Public Programs</h2>\n\t<ul>\n\t\t<li>PaleyLive LA</li>\n\t\t<li>PaleyLive NY</li>\n\t\t<li>Paley Impact</li>\n\t\t<li>Patron Circle & President\'s Circle</li>\n\t</ul>\n';

var tabsContainerEl = document.querySelector('.tabcontent__list');
tabsContainerEl.addEventListener('click', function (evt) {
	var clickedTabEl = evt.target;
	var tab = clickedTabEl.dataset.tab;

	var activeTabEl = document.querySelector('.tabcontent__list .active');
	activeTabEl.classList.remove('active');

	clickedTabEl.classList.add('active');

	//PART 3 -- Inject Content
	var tabContentContainerEl = document.querySelector('.tabcontent__content');
	if (tab === 'membership') {
		tabContentContainerEl.innerHTML = membershipHtml;
	}
	if (tab === 'programs') {
		tabContentContainerEl.innerHTML = programsHtml;
	}
	if (tab === 'screenings') {
		tabContentContainerEl.innerHTML = screeningsHtml;
	}
	if (tab === 'press') {
		tabContentContainerEl.innerHTML = pressHtml;
	}
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSwyZkFBSjtBQVNBLElBQUksbWdCQUFKO0FBU0EsSUFBSSx3YkFBSjtBQWtCQSxJQUFJLG1NQUFKOztBQVVBLElBQUksa0JBQWtCLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FBdEI7QUFDQSxnQkFBZ0IsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQVMsR0FBVCxFQUFhO0FBQ3RELEtBQUksZUFBZSxJQUFJLE1BQXZCO0FBQ0EsS0FBSSxNQUFNLGFBQWEsT0FBYixDQUFxQixHQUEvQjs7QUFFQSxLQUFJLGNBQWMsU0FBUyxhQUFULENBQXVCLDJCQUF2QixDQUFsQjtBQUNBLGFBQVksU0FBWixDQUFzQixNQUF0QixDQUE2QixRQUE3Qjs7QUFFQSxjQUFhLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsUUFBM0I7O0FBRUE7QUFDQSxLQUFJLHdCQUF3QixTQUFTLGFBQVQsQ0FBdUIsc0JBQXZCLENBQTVCO0FBQ0EsS0FBSSxRQUFRLFlBQVosRUFBeUI7QUFBRyx3QkFBc0IsU0FBdEIsR0FBa0MsY0FBbEM7QUFBa0Q7QUFDOUUsS0FBSSxRQUFRLFVBQVosRUFBdUI7QUFBRyx3QkFBc0IsU0FBdEIsR0FBa0MsWUFBbEM7QUFBZ0Q7QUFDMUUsS0FBSSxRQUFRLFlBQVosRUFBeUI7QUFBRyx3QkFBc0IsU0FBdEIsR0FBa0MsY0FBbEM7QUFBa0Q7QUFDOUUsS0FBSSxRQUFRLE9BQVosRUFBb0I7QUFBRyx3QkFBc0IsU0FBdEIsR0FBa0MsU0FBbEM7QUFBNkM7QUFFcEUsQ0FoQkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1RBU0sgOiBUYWJiZWQgQ29udGVudFxuLy8gV2hlbiBhIHVzZXIgc2VsZWN0cyBhIHRhYiAoZS5nLiA8c3BhbiBjbGFzcz1cInRhYmNvbnRlbnRfX3RhYlwiIGRhdGEtdGFiPVwicHJlc3NcIj5QcmVzczwvc3Bhbj4pXG4vLyAgICBpdCBzaG91bGQgXG4vLyAgICAgICAoMSkgZ2l2ZSB0aGF0IGVsZW1lbnQgYSBjbGFzcyBvZiAnYWN0aXZlJ1xuLy8gICAgICAgKDIpIHJlbW92ZSB0aGUgY2xhc3Mgb2YgYWN0aXZlIGZyb20gdGhlIDxzcGFuPiBlbGVtZW50IHRoYXQgaXMgbm8gbG9uZ2VyIGFjdGl2ZVxuLy8gICAgICAgKDMpIGluamVjdCB0aGUgcmVsZXZhbnQgSFRNTCBjb250ZW50IGludG8gPGRpdiBjbGFzcz1cInRhYmNvbnRlbnRfX2NvbnRlbnRcIj5cbi8vICAgICAgICAgICAgKHRoZSBodG1sIGNvbnRlbnQgaXMgaW5jbHVkZWQgYmVsb3cgKVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBtZW1iZXJzaGlwSHRtbCA9IGBcblx0PGRpdiBjbGFzcz1cIm1haW5cIj5cblx0XHQgXG5cdDxoMj5Kb2luIFVzIFRvZGF5ITwvaDI+XG5cdDxwPllvdSBjYW4gYmUgcGFydCBvZiB0aGUgUGFsZXkgQ2VudGVyIGNvbW11bml0eSBhcyBhbiA8ZW0+SW5kaXZpZHVhbCBNZW1iZXI8L2VtPiwgPGVtPlBhdHJvbiBNZW1iZXI8L2VtPiwgPGVtPk1lZGlhIENvdW5jaWwgTWVtYmVyPC9lbT4sIG9yIDxlbT5Db3Jwb3JhdGUgTWVtYmVyPC9lbT4uIEFsbCBpbmNsdWRlIHZlcnkgc3BlY2lhbCBiZW5lZml0cyBmb3IgWU9VIHdoaWxlIHN1cHBvcnRpbmcgdGhlIFBhbGV5IENlbnRlcuKAmXMgZXNzZW50aWFsIHByb2dyYW1zLjwvcD5cblx0PHAgY2xhc3M9XCJzbWFsbHRleHRcIj5UaGUgUGFsZXkgQ2VudGVyIGlzIGEgNTAxKGMpMyBub25wcm9maXQgb3JnYW5pemF0aW9uOyBvdXIgd29yayBhbmQgcHJvZ3JhbXMgYXJlIGRlcGVuZGVudCBvbiB5b3VyIHN1cHBvcnQuPC9wPlxuXHRcdCBcblx0PC9kaXY+XG5gXG52YXIgc2NyZWVuaW5nc0h0bWwgPSBgXG5cdDxoMj5TY3JlZW5pbmdzPC9oMj5cblx0PHA+U2F0dXJkYXlzIGFuZCBTdW5kYXlzIGluIE5ldyBZb3JrIGFuZCBMb3MgQW5nZWxlczwvcD5cblx0PHA+MTI6MTUgdG8gNDowMCBwbSBsb2NhbCB0aW1lIOKAoiBGUkVFIEFkbWlzc2lvbjwvcD5cblxuXHQ8YSBocmVmPVwiI1wiPiBWaXNpdCBOZXcgWW9yazwvYT4gIHwgIDxhPlZpc2l0IExvcyBBbmdlbGVzPC9hPlxuXG5cdDxwPldlZWtlbmQgU2NyZWVuaW5ncyBmcm9tIHRoZSBQYWxleSBBcmNoaXZlIG9uIHRoZSBCaWcgU2NyZWVuIGluIE5ZICYgTEEgb2ZmZXIgZ3JlYXQgZmFtaWx5IGVudGVydGFpbm1lbnQsIFBMVVMgcHJvZ3JhbW1pbmcgc2VsZWN0ZWQgYnkgb3VyIE1lbWJlcnMgYW5kIHNjcmVlbmVkIGZvciB0aGUgcHVibGljLiBZb3UgaGF2ZW4ndCByZWFsbHkgZXhwZXJpZW5jZWQgVFYgdW50aWwgeW91J3ZlIHNlZW4gaXQgb24gYSBtb3ZpZS1zaXplIHNjcmVlbiB3aXRoIGZlbGxvdyBmYW5zLjwvcD5cbmBcbnZhciBwcmVzc0h0bWwgPSBgXG5cdFx0PGgyPlByZXNzPC9oMj5cblx0XHQ8aHIvPlxuXHRcdFxuXHRcdDxoND5DdXJyZW50IFByZXNzIFJlbGVhc2VzPC9oND5cblx0XHQ8cD48c21hbGw+UmVhZCBNb3JlPC9zbWFsbD48L3A+XG5cdFx0PGhyLz5cblx0XHQ8aDQ+UHJlc3MgUmVsZWFzZSBBcmNoaXZlPC9oND5cblx0XHQ8cD48c21hbGw+UmVhZCBNb3JlPC9zbWFsbD5cblx0XHQ8aHIvPlxuXHRcdDxoND5QcmVzcyBLaXQvTG9nb3M8L2g0PlxuXHRcdDxwPlZpZXcgYW5kIGRvd25sb2FkIHByZXNzIG1hdGVyaWFscy48L3A+XG5cdFx0PHA+PHNtYWxsPlJlYWQgTW9yZTwvc21hbGw+XG5cdFx0PGhyLz5cblxuXHRcdDxoND5SZWdpc3RlciBmb3IgUHJlc3MgSW5mb3JtYXRpb248L2g0PlxuXHRcdDxwPjxzbWFsbD5DbGljayB0byBmaWxsIG91dCB0aGUgZm9ybTwvc21hbGw+PC9wPlxuYFxudmFyIHByb2dyYW1zSHRtbCA9IGBcblx0PGgyPlB1YmxpYyBQcm9ncmFtczwvaDI+XG5cdDx1bD5cblx0XHQ8bGk+UGFsZXlMaXZlIExBPC9saT5cblx0XHQ8bGk+UGFsZXlMaXZlIE5ZPC9saT5cblx0XHQ8bGk+UGFsZXkgSW1wYWN0PC9saT5cblx0XHQ8bGk+UGF0cm9uIENpcmNsZSAmIFByZXNpZGVudCdzIENpcmNsZTwvbGk+XG5cdDwvdWw+XG5gXG5cbnZhciB0YWJzQ29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiY29udGVudF9fbGlzdCcpXG50YWJzQ29udGFpbmVyRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpe1xuXHR2YXIgY2xpY2tlZFRhYkVsID0gZXZ0LnRhcmdldFxuXHR2YXIgdGFiID0gY2xpY2tlZFRhYkVsLmRhdGFzZXQudGFiIFxuXHRcblx0dmFyIGFjdGl2ZVRhYkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmNvbnRlbnRfX2xpc3QgLmFjdGl2ZScpXG5cdGFjdGl2ZVRhYkVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG5cdFxuXHRjbGlja2VkVGFiRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuXHQvL1BBUlQgMyAtLSBJbmplY3QgQ29udGVudFxuXHR2YXIgdGFiQ29udGVudENvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmNvbnRlbnRfX2NvbnRlbnQnKVxuXHRpZiggdGFiID09PSAnbWVtYmVyc2hpcCcpeyAgdGFiQ29udGVudENvbnRhaW5lckVsLmlubmVySFRNTCA9IG1lbWJlcnNoaXBIdG1sIH1cblx0aWYoIHRhYiA9PT0gJ3Byb2dyYW1zJyl7ICB0YWJDb250ZW50Q29udGFpbmVyRWwuaW5uZXJIVE1MID0gcHJvZ3JhbXNIdG1sIH1cblx0aWYoIHRhYiA9PT0gJ3NjcmVlbmluZ3MnKXsgIHRhYkNvbnRlbnRDb250YWluZXJFbC5pbm5lckhUTUwgPSBzY3JlZW5pbmdzSHRtbCB9XG5cdGlmKCB0YWIgPT09ICdwcmVzcycpeyAgdGFiQ29udGVudENvbnRhaW5lckVsLmlubmVySFRNTCA9IHByZXNzSHRtbCB9XG5cdFx0XG59KVxuXG4iXX0=
