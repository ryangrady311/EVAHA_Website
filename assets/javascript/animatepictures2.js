var myIndex2 = 0;
var firstRun = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex2++;
  if (myIndex2 > x.length) {myIndex2 = 1}    
  x[myIndex2-1].style.display = "block";  
  if(firstRun == 0) {
    setTimeout(carousel2, 8500); // Start at 8.5 seconds
    firstRun = 1;
    }
    else{
        setTimeout(carousel2, 10000); // Change image every 10 seconds
    }
}