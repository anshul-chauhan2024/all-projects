let child = document.querySelectorAll('.child');


child.forEach((val) => {

    val.addEventListener('mouseenter', () => {
        val.childNodes[3].style.opacity = 1;


    })
    val.addEventListener('mouseleave', () => {
        val.childNodes[3].style.opacity = 0;
     
    })
   
    val.addEventListener('mousemove', (detls) => {
        val.childNodes[3].style.left = detls.x + 'px';
        // val.childNodes[3].style.top = detls.y + 'px';
    })
})

