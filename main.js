var typed= new Typed(".text", {
    strings: ["Frontend Developer" , "youtuber" , "Web Developer" ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const resetAnimation = (element) => {
        element.classList.remove('animate');
        void element.offsetWidth; // Trigger reflow
        element.classList.add('animate');
    };

    const handleScroll = () => {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                resetAnimation(element);
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Reset all animations on scroll
    window.addEventListener('scroll', () => {
        animatedElements.forEach(resetAnimation);
    });
});