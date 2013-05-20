


$(document).ready(function() {

  $.localScroll({ duration: 1200, easing: 'easeOutQuint', top:'500px', offset: 10});

  $.stellar();
  
  $('.sidenav').scrollspy();

  
  $('#entries').waypoint(function(direction){

    if (direction == 'down') $("#bookpage").animate ({marginRight: '+=600px'}, 1200, 'easeOutQuint').css({'position':'fixed', 'top': '10%'})
      else {
       $("#bookpage").animate ({marginRight: '-=600px'}, 500, 'easeOutQuint').css({'position':'relative', 'top': '10%'})
     }
     $('#bookpage').toggleClass('stuck')
     $('.topic-intro').delay(1000).toggleClass('highlight',200)
   },
   {offset: '10%'}
  );


    $('#rapidLogging').waypoint(function(){
      $('.sidenav').toggleClass('fixed')
    });

  var removeHilight = function(){ $('.page').find('.highlight').removeClass('highlight')}



   $('#bullets')

  .waypoint(function(direction) {
         removeHilight();
    if (direction == 'down')  $("#bookpage ul li").each(function(index) {
      $(this).delay(200*index).fadeToggle(300);
    })

    else {
      $("#bookpage ul li").fadeOut();
    }


  }, { offset: 1 });




  $('#tasks')
      .waypoint(function(direction) {
    if (direction === 'down') {
      removeHilight();
    $('.bullet-task').addClass('highlight',200)
    }
  })
  .waypoint(function(direction) {
    if (direction === 'up') { 
    removeHilight();
    $('.bullet-task').addClass('highlight',200)}
  }, { offset: -100 });


  $('#notes')
    .waypoint(function(direction) {
    if (direction === 'down') {
      removeHilight();
    $('.bullet-note').addClass('highlight',200)
    }
  })
  .waypoint(function(direction) {
    if (direction === 'up') { 
    removeHilight();
    $('.bullet-note').addClass('highlight',200)}
  }, { offset: -100 });


  $('#events')
    .waypoint(function(direction) {
    if (direction === 'down') {
      removeHilight();
    $('.bullet-events').addClass('highlight',200)
    }
  })
  .waypoint(function(direction) {
    if (direction === 'up') { 
    removeHilight();
    $('.bullet-events').addClass('highlight',200)}
  }, { offset: 12 });




  $('#signifiers').waypoint(function() {

    $('.star, .explore, .inspiration').fadeToggle(),
    removeHilight();
   
  }, { offset: 200 });



  $('#pagenumbers').waypoint(function(direction){
    if (direction == 'down') $("#bookpage").animate ({marginTop: '-=800px'}, 800, 'easeOutQuint').css({'position':'relative', 'top': '8000px'})
      else {
       $("#bookpage").animate ({marginTop: '+=800px'}, 800, 'easeOutQuint').css({'position':'fixed', 'top': '10%'})
     }

     $('#bookpage .page-number').fadeToggle('slow').toggleClass('highlight')
   });


$('.share').click(function(){
  $('.socialLinks').slideToggle('fast');
});



  var b = new Date();
  var c = b.getDate();

  var d=new Date();
  var month=new Array();
  month[0]="January";
  month[1]="February";
  month[2]="March";
  month[3]="April";
  month[4]="May";
  month[5]="June";
  month[6]="July";
  month[7]="August";
  month[8]="September";
  month[9]="October";
  month[10]="November";
  month[11]="December";
  var n = month[d.getMonth()];

  $('.topic').append("<span>"+n+"</span>")
  $('.subtopic').append("<span>"+c+"</span>")


  function scrollToNew () {
  scrollTop = $(window).scrollTop();
  $('.subsection').each(function(i, h2){ // loop through article headings
    h2top = $(h2).offset().top; // get article heading top
    if (scrollTop < h2top) { // compare if document is below heading
      $.scrollTo(h2, 800); // scroll to in .8 of a second
      return false; // exit function
    }
  });
}

function scrollToLast () {
  scrollTop = $(window).scrollTop();

  var scrollToThis = null;

  // Find the last element with class 'new' that isn't on-screen:
  $('.subsection').each(function(i, h2) {
    h2top = $(h2).offset().top;
    if (scrollTop > h2top) {
      // This one's not on-screen - make a note and keep going:
      scrollToThis = h2;
    } else {
      // This one's on-screen - the last one is the one we want:
      return false;
    }
  });

  // If we found an element in the loop above, scroll to it:
  if(scrollToThis != null) {
    $.scrollTo(scrollToThis, 800);
  }
}


jQuery(function () {

  $("#next").click(scrollToNew);

  $(document).keydown(function (evt) {
    if (evt.keyCode == 40) { // down arrow
      evt.preventDefault(); // prevents the usual scrolling behaviour
      scrollToNew(); // scroll to the next new heading instead
    }else if (evt.keyCode == 38) { // up arrow
      evt.preventDefault();
      scrollToLast();
    }
  });

});


});

