const boxes = document.querySelectorAll('.slideLeft');  

boxes.forEach((slideLeft, index) => {    
    const sr = ScrollReveal({
        origin: 'left',     // Slide in from the left
        distance: '100px',  // Distance the element will slide (adjust as needed)
        duration: 800,     // Animation duration (in milliseconds)
        delay: index * 50, // Delay before animation starts (in milliseconds)
        reset: true         // Reset the animation on each view
    });
 
    sr.reveal(slideLeft);    
}); 
  

const boxes3 = document.querySelectorAll('.fadeIn');     
boxes3.forEach((fadeIn, index) => {     
    const sr = ScrollReveal({   
        origin: 'bottom',     // Start from the bottom (you can use 'top' for top-down fade)
        distance: '20px',     // Adjust the distance for the fade-in effect (e.g., 10px, 20px)
        duration: 800,       // Animation duration (in milliseconds)
        delay: index * 50,   // Delay before animation starts (in milliseconds)
        reset: true         // Reset the animation on each view
    });

    sr.reveal(fadeIn);   
});  