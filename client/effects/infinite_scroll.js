Session.set("newsLimit", 3);
lastScrollTop = 0; 

$(window).scroll(function(event){
  // test if we are near the bottom of the window
  if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    var scrollTop = $(this).scrollTop();
    // test if we are going down
    if (scrollTop > lastScrollTop){
     Session.set("newsLimit", Session.get("newsLimit") + 3);
    }

    lastScrollTop = scrollTop;
  }
      
})