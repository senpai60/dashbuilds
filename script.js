
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let fixed = document.querySelector('#fixed-img')

let elem = document.querySelectorAll('.elem')
elem.forEach(function(e){
    e.addEventListener('mouseenter',()=>{
       let imgURL = e.getAttribute('data-img')
        fixed.style.backgroundImage=`url(${imgURL})`
        fixed.style.display='block'
        
    })
    e.addEventListener('mouseleave',()=>{
        fixed.style.display='none'
    })
})