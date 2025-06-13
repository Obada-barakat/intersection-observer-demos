const header = document.querySelector('header');
const main = document.querySelector('main');
const aboutUsInfo = document.querySelector('section.info_container')
const sliders = document.querySelectorAll('.gallery .card');




mainObserverOpitions = {
    rootMargin: '-50px',
};

const mainObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        !entry.isIntersecting ? header.classList.add('scrolled-down') : header.classList.remove('scrolled-down')
    })
}, mainObserverOpitions);

mainObserver.observe(main);


infoContainerOptions = {
    threshold: 1,
    rootMargin: '50px'
};

const infoContainerObserver = new IntersectionObserver(function (entries, infoContainerObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            infoContainerObserver.unobserve(entry.target);
        }
    })
}, infoContainerOptions)

infoContainerObserver.observe(aboutUsInfo);

const slidersOptions = {
    threshold: 1,
}

const slidersObserver = new IntersectionObserver((entries, slidersObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('slide_in');
            slidersObserver.unobserve(entry.target)
        }
    })
}, slidersOptions)

sliders.forEach(slider => {
    slidersObserver.observe(slider)
})