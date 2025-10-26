// Wait for page to load
document.addEventListener('DOMContentLoaded', function () {
    // ✅ Load shared header
    const headerContainer = document.getElementById("header");
    fetch("header.html")
        .then(res => res.text())
        .then(data => {
            headerContainer.innerHTML = data;

            setupHeaderScroll();
        });
    const items = document.querySelectorAll('.shop-item');
    window.addEventListener('scroll', () => {
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                item.classList.add('visible');
            }
        });
    });


    // ✅ Feedback popup functionality
    const feedbackBtn = document.querySelector('.feedback-btn');
    const feedbackPopup = document.querySelector('.feedback-popup');
    const closeBtn = document.querySelector('.close-btn');

    if (feedbackBtn && feedbackPopup && closeBtn) {
        feedbackBtn.addEventListener('click', () => feedbackPopup.style.display = 'block');
        closeBtn.addEventListener('click', () => feedbackPopup.style.display = 'none');
    }

    // ✅ Review form submission
    const reviewForm = document.getElementById('review-form');
    const reviewSubmittedMsg = document.getElementById('review-submitted');
    if (reviewForm && reviewSubmittedMsg) {
        reviewForm.addEventListener('submit', event => {
            event.preventDefault();
            reviewSubmittedMsg.style.display = 'block';
            setTimeout(() => reviewSubmittedMsg.style.display = 'none', 2000);
        });
    }

    // ✅ Add to cart / wishlist
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const addToWishlistBtn = document.querySelector('.add-to-wishlist-btn');
    const addToCartMsg = document.getElementById('add-to-cart-message');
    const addToWishlistMsg = document.getElementById('add-to-wishlist-message');

    if (addToCartBtn && addToCartMsg) {
        addToCartBtn.addEventListener('click', () => {
            addToCartMsg.style.display = 'block';
            setTimeout(() => addToCartMsg.style.display = 'none', 2000);
        });
    }

    if (addToWishlistBtn && addToWishlistMsg) {
        addToWishlistBtn.addEventListener('click', () => {
            addToWishlistMsg.style.display = 'block';
            setTimeout(() => addToWishlistMsg.style.display = 'none', 2000);
        });
    }

    // ✅ Contact form
    const form = document.getElementById('contact-form');
    const sentMsg = document.getElementById('sent-msg');
    if (form && sentMsg) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            sentMsg.style.display = 'block';
            sentMsg.style.color = 'green';
            sentMsg.style.fontSize = '18px';
            sentMsg.style.fontWeight = 'bold';
            sentMsg.innerText = 'Message sent!';
            setTimeout(() => sentMsg.style.display = 'none', 3000);
        });
    }
});

// ✅ Function for header scroll + parallax
function setupHeaderScroll() {
    window.addEventListener('scroll', function () {
        const image = document.querySelector('.masthead img');
        const header = document.getElementById("header");
        const scrollPosition = window.scrollY;

        // Parallax
        if (image) {
            image.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }

        // Change header color
        if (header) {
            if (scrollPosition > 50) header.classList.add("scrolled");
            else header.classList.remove("scrolled");
        }
    });
}
