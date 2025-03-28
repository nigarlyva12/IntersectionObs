document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
}, { threshold: 0.6 });

    const lazyElements = document.querySelectorAll('.lazy-load');
    lazyElements.forEach(element => {
        observer.observe(element);
    });
});