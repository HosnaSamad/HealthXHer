// --- 1. SPA Navigation Logic ---

/**
 * Switches the active page content using a simple display: none / display: block toggle.
 * @param {string} pageId - The ID of the section/page to display (e.g., 'home', 'challenges').
 */
function showPage(pageId) {
    const allPages = document.querySelectorAll('.page-content');
    const targetPage = document.getElementById(pageId);

    // Guard clause to prevent errors if the ID doesn't exist
    if (!targetPage) {
        console.error(`Page ID '${pageId}' not found.`);
        return;
    }

    // 1. Deactivate all currently active pages
    allPages.forEach(page => {
        page.classList.remove('active');
    });

    // 2. Activate the new page (requestAnimationFrame ensures CSS changes are handled efficiently)
    requestAnimationFrame(() => {
        targetPage.classList.add('active');
        
        // Update URL hash without forcing a full page reload
        history.pushState({ page: pageId }, '', `#${pageId}`);

        // Scroll smoothly to the top of the new page content
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Re-initialize animations for the newly visible page to trigger fade-in effects
        initializeIntersectionObserver();
    });
}


// --- 2. Scroll-In Animation Logic (Intersection Observer) ---

// Options for the observer: trigger when 10% of the element is visible
const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.1 
};

/**
 * Callback function for the Intersection Observer.
 * Adds the 'animate-intro' class to trigger CSS animation on visible elements.
 */
const intersectionCallback = (entries, observer) => {
    entries.forEach(entry => {
        const parentPage = entry.target.closest('.page-content');
        
        // Only animate if the element is intersecting AND belongs to the currently active page
        if (entry.isIntersecting && parentPage && parentPage.classList.contains('active')) {
            if (!entry.target.classList.contains('animate-intro')) {
                // Add the animation class
                entry.target.classList.add('animate-intro');
            }
            // Stop observing the element once it has animated
            observer.unobserve(entry.target);
        }
    });
};

// Create the Intersection Observer instance
const contentObserver = new IntersectionObserver(intersectionCallback, observerOptions);

/**
 * Sets up or resets the Intersection Observer to watch all animatable content cards.
 */
function initializeIntersectionObserver() {
    // Find all elements with the 'content-card' class
    document.querySelectorAll('.content-card').forEach(card => {
        // Remove the class first to allow the animation to re-trigger if the page is revisited
        card.classList.remove('animate-intro');
        
        // Start observing the element
        contentObserver.observe(card);
    });
}


// --- 3. Smart Header Scroll Effects ---

// Variable to store the previous scroll position
let lastScrollY = window.scrollY;
const header = document.getElementById('main-header');
// Threshold (in pixels) to start hiding the header
const scrollThreshold = 70; 


/**
 * !!! NEW FUNCTION FOR SMART HEADER !!!
 * Hides the header when scrolling down past a threshold, and shows it when scrolling up.
 */
function handleSmartHeader() {
    const currentScrollY = window.scrollY;
    
    // 1. Scrolling Down Logic
    if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        // Scrolling Down: Hide the header by adding the transformation class
        header.classList.add('header-hidden');
    } 
    // 2. Scrolling Up Logic
    else if (currentScrollY < lastScrollY) {
        // Scrolling Up: Show the header by removing the class
        header.classList.remove('header-hidden');
    } 
    
    // 3. Always show the header and control shadow when near the top
    if (currentScrollY <= scrollThreshold) {
         header.classList.remove('header-hidden');
         header.classList.remove('header-shadow-scroll'); // Remove shadow near top
    } else {
        header.classList.add('header-shadow-scroll'); // Add shadow when scrolled past threshold
    }

    // Update the last position for the next check
    lastScrollY = currentScrollY;
}


// --- 4. Initialization and Event Listeners ---

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Set up click listeners for all navigation links (internal SPA links)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Get the target page ID from the data-page attribute or the href hash
            const pageId = this.getAttribute('data-page') || this.getAttribute('href').substring(1);
            if (pageId) {
                showPage(pageId);
            }
        });
    });

    // Handle hash changes (supports browser back/forward buttons)
    window.addEventListener('popstate', (e) => {
        // Determine the page ID from the URL hash, defaulting to 'home'
        const pageId = window.location.hash.substring(1) || 'home';
        if (document.getElementById(pageId)) {
            // Manually update the active page state
            const allPages = document.querySelectorAll('.page-content');
            allPages.forEach(page => page.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
            
            // Scroll to top and re-init animations
            window.scrollTo({ top: 0, behavior: 'smooth' });
            initializeIntersectionObserver();
        }
    });

    // FAQ collapse/expand logic (for sections with class "faq-item")
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                const content = item.querySelector('.faq-content');
                content.classList.toggle('hidden');
            });
        });
   
    // Handle the initial page load state
    let initialPageId = window.location.hash.substring(1);
    // If hash is missing or points to a non-existent page, default to 'home'
    if (!document.getElementById(initialPageId)) {
        initialPageId = 'home';
    }
    
    // Set the initial active page
    const allPages = document.querySelectorAll('.page-content');
    allPages.forEach(page => page.classList.remove('active'));
    document.getElementById(initialPageId).classList.add('active');
    
    // Ensure history state is clean for the initial load
    history.replaceState({ page: initialPageId }, '', `#${initialPageId}`);

    // Add scroll event listener for the smart header effect
    window.addEventListener('scroll', handleSmartHeader);
    handleSmartHeader(); // Check header state on load

    // Initial run of the observer to animate content on the first visible page
    initializeIntersectionObserver();
});