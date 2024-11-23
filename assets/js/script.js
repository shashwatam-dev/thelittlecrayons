let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-images img');
    const dots = document.querySelectorAll('.dot');

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex - 1].style.display = "block";  
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 20000); // Change image every 10 seconds
    }

    function currentSlide(n) {
        slideIndex = n - 1;
        showSlides();
    }

    showSlides(); // Initial call