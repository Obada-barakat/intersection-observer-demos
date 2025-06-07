const cardContainer = document.querySelector('.card_container')
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);

        // to stop observing an element 
        // if (entry.isIntersecting) observer.unobserve(entry.target) 

    })

}, {
    threshold: 1,
    // rootMargin: "-100px",
    // root  
})

// smiulate the lazy loading 

const lastCardObserver = new IntersectionObserver(entries => {
    const lastCard = entries[0];
    if (!lastCard.isIntersecting) return
    loadNewCards();
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(document.querySelector('.card:last-child'))
}, {
    rootMargin: '100px'
})

// for e.g. fetching some elements
function loadNewCards() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('div');
        card.textContent = 'New Card';
        card.classList.add('card');
        observer.observe(card);
        cardContainer.append(card);
    }
}



lastCardObserver.observe(document.querySelector('.card:last-child'))



// observe only takes one element at a time
cards.forEach(card => {
    observer.observe(card)
})