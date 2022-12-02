const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelector('.slide');
 
let index = 0;
function nextslide(){
    index++;
    slides.forEach((slide)=>{
        slide.style.display='none';
    });
    slides[index].style.display = 'flex';

    }
    function prevslide(){
        index--;
        if(index<0){
            index = slides.length-1;
        }
        slides.forEach((slide)=>{
            slide.style.display='none'
        })
        }
    
    next.addEventListener('click',nextslide);
    prev.addEventListener('click',prevslide);

