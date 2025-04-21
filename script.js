// // Mobile Menu Toggle
// const menuBtn = document.getElementById('menu-btn');
// const mobileMenu = document.getElementById('mobile-menu');

// menuBtn.addEventListener('click', () => {
//   mobileMenu.classList.toggle('hidden');
//   mobileMenu.classList.toggle('block');
// });

// // Sticky Navbar Scroll Effect
// window.addEventListener('scroll', () => {
//   const navbar = document.getElementById('navbar');
//   if (window.scrollY > 50) {
//     navbar.classList.add('shadow-lg', 'bg-white/95', 'backdrop-blur-sm');
//   } else {
//     navbar.classList.remove('shadow-lg', 'bg-white/95', 'backdrop-blur-sm');
//   }
// });

// Close mobile menu when clicking outside
// document.addEventListener('click', (e) => {
//   if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
//     mobileMenu.classList.add('hidden');
//     mobileMenu.classList.remove('block');
//   }
// });


    window.addEventListener("scroll", function() {
        const navbar = document.getElementById("navbar");
        const navLinks = document.querySelectorAll(".nav-link");

        if (window.scrollY > 50) {
            navbar.classList.add("bg-red", "shadow-lg");
            navbar.classList.remove("bg-white/30");

            // Change text color to white
            navLinks.forEach(link => link.classList.add("text-white"));
        } else {
            navbar.classList.add("bg-white/30");
            navbar.classList.remove("bg-red", "shadow-lg");

            // Change text color to dark for better visibility
            navLinks.forEach(link => link.classList.remove("text-white"));
        }
    });

    
//auto scroll service 

document.addEventListener("DOMContentLoaded", function () {
    let tabs = document.querySelectorAll(".tab-btn"); // Tab buttons
    let cards = document.querySelectorAll(".service-card"); // Service cards
    let currentIndex = 0;
    let totalTabs = tabs.length;
    let autoScroll;
    let scrollTime = 10000; // Default: 7 seconds per tab

    function switchTab(index) {
        let selectedCategory = tabs[index].getAttribute("data-category");

        // Update tabs active state
        tabs.forEach(tab => {
            tab.classList.remove("bg-teal-700", "text-white");
            tab.classList.add("bg-gray-200", "text-gray-600");
        });

        tabs[index].classList.add("bg-teal-700", "text-white");
        tabs[index].classList.remove("bg-gray-200", "text-gray-600");

        // Animate cards (Fade In + Scale)
        cards.forEach(card => {
            if (card.getAttribute("data-category") === selectedCategory) {
                card.style.display = "block";
                card.style.opacity = 0;
                card.style.transform = "scale(0.95)";
                setTimeout(() => {
                    card.style.transition = "all 0.5s ease";
                    card.style.opacity = 1;
                    card.style.transform = "scale(1)";
                }, 50);
            } else {
                card.style.display = "none";
                card.style.opacity = 0;
            }
        });
    }

    function autoSwitch() {
        currentIndex = (currentIndex + 1) % totalTabs;
        switchTab(currentIndex);
    }

    function startAutoScroll() {
        let calculatedTime = totalTabs > 5 ? scrollTime + 2000 : scrollTime; // If more than 5 tabs, increase scroll time
        autoScroll = setInterval(autoSwitch, calculatedTime);
    }

    function stopAutoScroll() {
        clearInterval(autoScroll);
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            stopAutoScroll(); // Pause auto-scroll when clicked
            currentIndex = index;
            switchTab(index);
            setTimeout(startAutoScroll, 15000); // Resume auto-scroll after 10 seconds
        });
    });

    // Initialize first tab
    switchTab(0);
    startAutoScroll();
});
// logo scroll

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".logo-wrapper"); // Scrollable div
    const logos = document.querySelector(".logo-slider");
    const scrollLeftBtn = document.getElementById("scroll-left");
    const scrollRightBtn = document.getElementById("scroll-right");

    // Duplicate logos for seamless effect
    logos.innerHTML += logos.innerHTML;

    // Ensure the div is scrollable (very important)
    slider.style.scrollBehavior = "smooth";

    // Left button - Scrolls left
    scrollLeftBtn.addEventListener("click", function () {
        slider.scrollBy({ left: -200, behavior: "smooth" }); // Adjust as needed
    });

    // Right button - Scrolls right
    scrollRightBtn.addEventListener("click", function () {
        slider.scrollBy({ left: 200, behavior: "smooth" }); // Adjust as needed
    });
});

//count

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        let target = +counter.getAttribute('data-target');
        let count = 0;
        let speed = Math.floor(target / 100); // Adjust speed

        function updateCounter() {
            if (count < target) {
                count += speed;
                counter.innerText = count;
                setTimeout(updateCounter, 30); // Adjust speed timing
            } else {
                counter.innerText = target;
            }
        }

        updateCounter();
    });
});





