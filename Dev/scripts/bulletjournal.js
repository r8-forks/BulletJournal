


$(document).ready(function() {

  $.localScroll({ duration: 1200, easing: 'easeOutQuint', top:'500px'});
  
  $('.sidenav').scrollspy()

  
  $('#entries').waypoint(function(direction){

    if (direction == 'down') $("#bookpage").animate ({marginRight: '+=600px'}, 1200, 'easeOutQuint').css({'position':'fixed', 'top': '10%'})
      else {
       $("#bookpage").animate ({marginRight: '-=600px'}, 500, 'easeOutQuint').css({'position':'relative', 'top': '10%'})
     }
     $('#bookpage').toggleClass('stuck')
     $('.topic-intro').delay(1000).fadeToggle().toggleClass('highlight',200)
   },
   {offset: '10%'}
  );


    $('#rapidLogging').waypoint(function(){
      $('.sidenav').toggleClass('fixed')
    });


  $('#bullets').waypoint(function(direction) {
    // $("#bookpage ul li").fadeToggle(),
    if (direction == 'down')  $("#bookpage ul li").each(function(index) {
      $(this).delay(200*index).fadeToggle(300);
    })

    else {
      $("#bookpage ul li").fadeOut();
    }

    $('.topic-intro, .bullet-note, .bullet-events, .bullet-task').removeClass('highlight',200)
  }, { offset: 200 });

  $('#tasks').waypoint(function() {
    $('.bullet-task').toggleClass('highlight',200)
  }, { offset: 200 });

  $('#notes').waypoint(function() {
    $('.bullet-note').toggleClass('highlight',200)
    $('.bullet-task, .topic-intro, .bullet-events').removeClass('highlight',200)

  }, { offset: 200 });

  $('#events').waypoint(function() {
    $('.bullet-events').toggleClass('highlight',200)
    $('.bullet-note, .topic-intro, .bullet-task').removeClass('highlight',200)

  }, { offset: 200 });

  $('#signifiers').waypoint(function() {

    $('.star').fadeToggle(),
    $('html').removeClass('highlight',200)
  }, { offset: 200 });



  $('#pagenumbers').waypoint(function(direction){
    if (direction == 'down') $("#bookpage").animate ({marginTop: '-=500px'}, 800, 'easeOutQuint').css({'position':'relative', 'top': '7750px'})
      else {
       $("#bookpage").animate ({marginTop: '+=500px'}, 500, 'easeOutQuint').css({'position':'fixed', 'top': '10%'})
     }

     $('#bookpage .page-number').fadeToggle('slow').toggleClass('highlight')
   });

  $('#index').waypoint(function(direction){
        // if (direction == 'down') $("#indexpage").animate({marginRight: '+=600px'}, 1200, 'easeOutQuint')
        // else {
        //    $("#indexpage").animate ({marginRight: '-=600px'}, 500, 'easeOutQuint').css({'position':'relative', 'top': '10%'})
        // }
      });

    // $('#index').waypoint(function(direction){
    //     if (direction == 'down') $("#bookpage").animate ({marginRight: '-=800px'}, 500, 'easeOutQuint')
    //     else {
    //        $("#bookpage").animate ({marginRight: '+=800px'}, 1200, 'easeOutQuint')
    //     }
    // }, {offset: 500});







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

