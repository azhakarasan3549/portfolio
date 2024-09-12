
barcon.addEventListener('click',()=>{
    var bar= document.getElementById('bar')
    const barcon= document.getElementById('barcon')
   console.log("click")
    if (bar.style.display=='block') {
        bar.style.display='none';
         barcon.style.color=" #f85307";
    }
    else{
        bar.style.display='block';
         barcon.style.color="#402575";
    }
})

background.addEventListener('click',()=>{
    const background=document.getElementById('background')
        bar.style.display='none';
})
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var exp = document.getElementById("Experience")
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
            exp.style.height ="310px"
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
        exp.style.height ="500px"
    }
  }  