
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
  