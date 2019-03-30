$(document).ready(function() {
        $('#lightbox').add('#lbcontent').add('close').hide();
        $('#lightbox .close').click(function(c) {
          c.preventDefault();
          $('#lightbox').add('#lbcontent').add('.close').fadeOut('slow');
        });
        $('#lefttopmenu > li:eq(0)').click(function(c) {
          c.preventDefault();
          $('#lightbox').add('#lbcontent').add('.close').fadeIn('slow');
          $('#lbcontent').load('/airport/flights.html');
          $('head').append('<link rel="stylesheet" href="/airport/flights.css" type="text/css" />');
        });
        $('#lefttopmenu > li:eq(1)').click(function(c) {
          c.preventDefault();
          $('#lightbox').add('#lbcontent').add('.close').fadeIn('slow');
          $('#lbcontent').load('/airport/parking.html');
          $('head').append('<link rel="stylesheet" href="/airport/parking.css" type="text/css" />');
        });
        $('#lefttopmenu > li:eq(2)').click(function(c) {
          c.preventDefault();
          $('#lightbox').add('#lbcontent').add('.close').fadeIn('slow');
          $('#lbcontent').load('/airport/transportation.html');
          $('head').append('<link rel="stylesheet" href="/airport/flights.css" type="text/css" />');
        });
        $('#lefttopmenu > li:eq(3)').click(function(c) {
          c.preventDefault();
          $('#lightbox').add('#lbcontent').add('.close').fadeIn('slow');
          $('#lbcontent').load('/airport/maps.html');
          $('head').append('<link rel="stylesheet" href="/airport/flights.css" type="text/css" />');
        });
        $('#lefttopmenu > li:eq(4)').click(function(c) {
          c.preventDefault();
          $('#lightbox').add('#lbcontent').add('.close').fadeIn('slow');
          $('#lbcontent').load('/airport/food.html');
          $('head').append('<link rel="stylesheet" href="/airport/flights.css" type="text/css" />');
        });
        $('#lefttopmenu > li:eq(5)').click(function(c) {
          c.preventDefault();
          $('#lightbox').add('#lbcontent').add('.close').fadeIn('slow');
          $('#lbcontent').load('/airport/shopping.html');
          $('head').append('<link rel="stylesheet" href="/airport/flights.css" type="text/css" />');
        });
        $('#lefttopmenu > li:eq(6)').click(function(c) {
          c.preventDefault();
          $('#lightbox').add('#lbcontent').add('.close').fadeIn('slow');
          $('#lbcontent').load('/airport/business.html');
          $('head').append('<link rel="stylesheet" href="/airport/flights.css" type="text/css" />');
        });
        $('#lefttopmenu > li:eq(7)').click(function(c) {
          c.preventDefault();
          $('#lightbox').add('#lbcontent').add('.close').fadeIn('slow');
          $('#lbcontent').load('/airport/city.html');
          $('head').append('<link rel="stylesheet" href="/airport/flights.css" type="text/css" />');
        });
        $('#lefttopmenu > li:eq(8)').click(function(c) {
          c.preventDefault();
          $('#lightbox').add('#lbcontent').add('.close').fadeIn('slow');
          $('#lbcontent').load('/airport/faq.html');
          $('head').append('<link rel="stylesheet" href="/airport/flights.css" type="text/css" />');
        });
      });