/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

function Scrolling() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    console.log(prevScrollpos);
   
   
     if (prevScrollpos > currentScrollPos) {
        $('#navbar').fadeIn(500);

     } else {
        $('#navbar').fadeOut(500);

          }
      prevScrollpos = currentScrollPos;
    }
}

$(document).ready(function() {
    $('#aviso').hide(0);
     
     
            $(window).scroll(function(){
                    var windowHeight = $(window).scrollTop();
                    var contenido2 = $("#content").offset();
                    contenido2 = contenido2.top;
     
                        if(windowHeight >= contenido2  ){
                      
                       
                        document.getElementById('navbar').className = "navbar navbar-expand-lg navbar-dark bg-dark fixed-top";
                        
                        }else{
                       
                     Scrolling();
                      document.getElementById('navbar').className = "navbar navbar-expand-lg navbar-dark  fixed-top";
                    }
     });
});

//Func fot btns
