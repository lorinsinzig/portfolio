// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to calculate the visible area of an element
function getVisibleArea(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    return visibleHeight * rect.width; // Approximation of visible area
}

// Function to highlight the active navigation item based on scroll position
function highlightNavItem() {
    var sections = document.querySelectorAll('section');
    var maxVisibleArea = 0;
    var activeSectionId = null;

    // Find the section with the most content in the viewport
    sections.forEach(function(section) {
        var visibleArea = getVisibleArea(section);
        if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea;
            activeSectionId = section.id;
        }
    });

    // Highlight the corresponding navigation item
    var navItem = document.querySelector('nav a[href="#' + activeSectionId + '"]').parentNode;
    if (navItem) {
        // Remove 'active' class from all nav items
        document.querySelectorAll('nav li').forEach(function(item) {
            item.classList.remove('active');
        });
        // Add 'active' class to the nav item corresponding to the active section
        navItem.classList.add('active');
    }
}

// Highlight the active navigation item when the page loads
document.addEventListener('DOMContentLoaded', function() {
    highlightNavItem();
});

// Listen for scroll events and highlight the active navigation item
window.addEventListener('scroll', highlightNavItem);
