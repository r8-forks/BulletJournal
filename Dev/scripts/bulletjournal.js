


$(document).ready(function() {

  $.localScroll({ duration: 1200, easing: 'easeOutQuint', top:'500px'});
  $('.sidenav').scrollspy()

    $('#entries').waypoint(function(direction){
        
        if (direction == 'down') $("#bookpage").animate ({marginRight: '+=600px'}, 1200, 'easeOutQuint')
        else {
           $("#bookpage").animate ({marginRight: '-=600px'}, 500, 'easeOutQuint')
        }
        $('#bookpage').toggleClass('stuck')
        $('.topic-intro').delay(1000).fadeToggle().toggleClass('highlight',200)
    },
    {offset: '10%'}
    );

    $('#bullets').waypoint(function() {
      $('#bookpage ul').fadeToggle('slow'),
      $('.topic-intro, .bullet-note, .bullet-events, .bullet-tasks').removeClass('highlight',200)
    }, { offset: 200 });

    $('#tasks').waypoint(function() {
      $('.bullet-task').toggleClass('highlight',200)
      $('.topic-intro, .bullet-note, .bullet-events').removeClass('highlight',200)


      
    });

    $('#notes').waypoint(function() {
      $('.bullet-note').toggleClass('highlight',200)
      $('.bullet-task, .topic-intro, .bullet-events').removeClass('highlight',200)
      
    });

    $('#events').waypoint(function() {
      $('.bullet-events').toggleClass('highlight',200)
      $('.bullet-note, .topic-intro, .bullet-task').removeClass('highlight',200)
      
    });



    $('#pagenumbers').waypoint(function(direction){
        if (direction == 'down') $("#bookpage").animate ({marginTop: '-=500px'}, 800, 'easeOutQuint')
        else {
           $("#bookpage").animate ({marginTop: '+=500px'}, 500, 'easeOutQuint')
        }
        $('.page-number').fadeToggle('slow').toggleClass('highlight')
    });

    $('#index').waypoint(function(direction){
        if (direction == 'down') $("#bookpage").animate ({marginRight: '-=800px'}, 500, 'easeOutQuint')
        else {
           $("#bookpage").animate ({marginRight: '+=800px'}, 1200, 'easeOutQuint')
        }
    }, {offset: 1000});



    



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
  
    $('.topic-intro .topic').append("<span>"+n+"</span>")
    $('.topic-intro .subtopic').append("<span>"+c+"</span>")

    

  

    
});
    
