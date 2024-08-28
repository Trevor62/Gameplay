 const images = ['image1.jpg',  'image5.jpg','image6.jpg','image7.jpg','image8.jpg','image9.jpg','image4.jpg',];

let currentIndex = 0;


const carouselImage = document.getElementById('carousel');

const prevBtn = document.getElementById('left');
// const nextBtn = document.getElementsByClassName('ellipse-group');
const nextBtn = document.getElementById('v');

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    carouselImage.src = images[currentIndex];
    

    carousel.style.backgroundImage=images[1]
    // console.log(images);
   
    
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    carouselImage.src = images[currentIndex];

    // carousel.style.backgroundImage='url("image1.jpg")'
   
});


/////////////////////// scrolll

document.addEventListener('DOMContentLoaded', () => {
    // const links = document.querySelectorAll('.navbar a');
    const links = document.querySelectorAll('.home-parent home');
   
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
