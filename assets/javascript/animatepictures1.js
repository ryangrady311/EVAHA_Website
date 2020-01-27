var myIndex1 = 0;
var firstRun = 0;
carousel1();

function carousel1() {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex1++;
  if (myIndex1 > x.length) {myIndex1 = 1}    
  x[myIndex1-1].style.display = "block";  
  if(firstRun == 0) {
    setTimeout(carousel1, 3000); // Change image every 3 seconds
    firstRun = 1;
    }
    else{
      setTimeout(carousel1, 3000); // Change image every 3 seconds
    }
}