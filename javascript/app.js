// JavaScript Document
var main = function() {
	$('.btn' ).click(function(){
		$('p').css({
			color: 'blue'});
	});

	$('.btn2').click(function(){
		$('h2').animate({
			'marginLeft': '-=30px'},
			'fast');
		$('h2').animate({
			'marginLeft': '+=30px'},
			'fast');
		$('h2').animate({
			'marginLeft': '-=30px'},
			'fast');
		$('h2').animate({
			'marginLeft': '+=30px'},
			'fast');
		$('h2').animate({
			'marginLeft': '-=30px'},
			'fast');
		$('h2').animate({
			'marginLeft': '+=30px'},
			'fast');
	});
	$('.box').click(function(){
		var box = $('.box');
		box.animate({
			width: '300px'},
			'slow');
			
		box.animate({
			'marginLeft': '+=200px',
			width: '50px',
			opacity: '0.4'},
			'slow');
		
		box.animate({
			height: '300px'},
			'slow');
		
		box.animate({
			'marginTop': '+=200px',
			height: '50px'},
			'slow');
					
		box.animate({
			'marginLeft': '-=200px',
			width: '300px'},
			'slow');
			
		box.animate({
			'marginTop': '-=200px',
			width: '50px'},
			'slow');
		box.animate({
			opacity: '1.0'});
		});	
}
$(document).ready(main);