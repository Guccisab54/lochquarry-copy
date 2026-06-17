document.querySelectorAll('.rope-slideshow img').forEach(img => {
    let enlarged = false;

    img.addEventListener('click', () => {
        anime({
            targets: img,
            scale: enlarged ? 1 : 2,
            duration: 500,
            easing: 'easeInOutQuad'
        });

        enlarged = !enlarged;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.water-slideshow img').forEach(img => {
        let rotation = 0;

        img.addEventListener('click', () => {
            rotation += 360;

            anime({
                targets: img,
                rotate: rotation,
                duration: 1000,
                easing: 'easeInOutQuad'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.staff-flip img').forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('flipped');
        });
    });
});

(function () {
    const slides = document.querySelectorAll('.slideshow img');
    let current = 0;
    const total = slides.length;

    // Hide all slides
    slides.forEach(slide => {
        slide.style.opacity = 0;
        slide.style.transform = 'translateX(100%)';
    });
}

    // Show first slide
    slides[0].style.opacity = 1;
    slides[0].style.transform = 'translateX(0)';


    function showNextSlide() {
        const next = (current + 1) % total;

        anime({
            targets: slides[current],
            translateX: '-100%',
            opacity: 0,
            duration: 1000,
            easing: 'easeInOutQuad'
        });

        slides[next].style.opacity = 1;

        anime({
            targets: slides[next],
            translateX: ['100%', '0%'],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutQuad'
             complete: () => {
            current = next;}
        });
    });
)};

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slideshow img');

    if (slides.length === 0) return;

    let current = 0;
    const total = slides.length;

    // Initial state
    slides.forEach((slide, index) => {
        slide.style.opacity = index === 0 ? '1' : '0';
        slide.style.transform = index === 0
            ? 'translateX(0)'
            : 'translateX(100%)';
    });

    function showNextSlide() {
        const next = (current + 1) % total;

        anime({
            targets: slides[current],
            translateX: '-100%',
            opacity: 0,
            duration: 1000,
            easing: 'easeInOutQuad'
        });

         anime.set(slides[next], {
            translateX: '100%',
            opacity: 0
        });

        anime({
            targets: slides[next],
            translateX: '0%',
            opacity: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
            complete: () => {
                anime.set(slides[current], {
                    translateX: '100%',
                    opacity: 0
                });

                current = next;
            }
        });
    }

    setInterval(showNextSlide, 3000);
});

      


