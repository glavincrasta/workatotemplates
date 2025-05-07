// Main JavaScript file for Workato Templates

document.addEventListener('DOMContentLoaded', function() {
    // Initialize search functionality
    initSearch();
    
    // Add smooth scrolling for anchor links
    initSmoothScroll();
    
    // Initialize any interactive components
    initComponents();
    
    // Initialize search toggle
    initSearchToggle();
});

/**
 * Initialize search functionality
 */
function initSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
}

/**
 * Perform search action (placeholder for now)
 * @param {string} query - The search query
 */
function performSearch(query) {
    // This is a placeholder for actual search functionality
    // In a real implementation, this would filter templates or redirect to a search results page
    console.log('Searching for:', query);
    alert('Search functionality will be implemented soon! You searched for: ' + query);
    
    // For a real implementation, you might:
    // 1. Redirect to a search page: window.location.href = '/search?q=' + encodeURIComponent(query);
    // 2. Or filter templates on the current page
    // 3. Or make an API call to get results
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/**
 * Initialize interactive components
 */
function initComponents() {
    // This can be expanded as more interactive elements are added
    
    // Template hover effects
    const templateCards = document.querySelectorAll

/**
 * Template data will eventually come from a JSON file or API
 * This is a placeholder for that data structure
 */
const templates = [
    {
        id: 1,
        title: "Salesforce to NetSuite Invoice Sync",
        description: "Automatically sync invoices from Salesforce to NetSuite with field mapping",
        category: "CRM & Sales",
        rating: 4.8,
        downloads: 124,
        icon: "fas fa-file-invoice",
        tags: ["salesforce", "netsuite", "invoice", "sync"]
    },
    {
        id: 2,
        title: "Slack to Google Calendar Events",
        description: "Create Google Calendar events from Slack messages with a simple command",
        category: "Project Management",
        rating: 4.6,
        downloads: 98,
        icon: "fas fa-calendar-check",
        tags: ["slack", "google calendar", "events"]
    },
    {
        id: 3,
        title: "Jira to Asana Task Integration",
        description: "Sync Jira issues with Asana tasks bi-directionally to keep teams aligned",
        category: "Project Management",
        rating: 4.7,
        downloads: 156,
        icon: "fas fa-tasks",
        tags: ["jira", "asana", "task", "sync"]
    }
    // More templates would be added here
];
