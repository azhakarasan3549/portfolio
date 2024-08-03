
barcon.addEventListener('click',()=>{
    var bar= document.getElementById('bar')
    const barcon= document.getElementById('barcon')
   console.log("click")
    if (bar.style.display=='block') {
        bar.style.display='none';
         barcon.style.color="white"
    }
    else{
        bar.style.display='block'
         barcon.style.color="white"
    }
})
backg.addEventListener('click',()=>{
    const background=document.getElementById('background')
     bar= document.getElementById('bar');
    if (bar.style.display=='block') {
        bar.style.display='none';
    }
})
  