(function ($) {

  "use strict";
 
   
     
//loader
    setTimeout(function () {
      $('.loader_bg').fadeToggle();
    }, 100);

    // TOOLTIP
 

})(jQuery);
function darkmode(){
  var dark = document.getElementById('dark');
   var element = document.body;
  element.classList.toggle("darkmode");
  dark.style.color = "white";
  
  return ;
  
}
