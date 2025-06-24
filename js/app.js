// Main Application JavaScript for AI Skills Database
// Handles user interactions, search, filtering, and modal functionality

class AISkillsApp {
    constructor() {
        this.skills = skillsDatabase.skills;
        this.filteredSkills = [...this.skills];
        this.currentCategory = 'all';
        this.currentProficiency = 'all';
        this.currentSearchTerm = '';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderSkills();
        this.setupSmoothScrolling();
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.querySelector('.search-btn');
        
        searchInput.addEventListener('input', (e) => {
            this.currentSearchTerm = e.target.value.toLowerCase();
            this.filterSkills();
        });

        searchBtn.addEventListener('click', () => {
            this.performSearch();
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });

        // Category filter tabs
        const filterTabs = document.querySelectorAll('.filter-tab');
        filterTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.setActiveTab(e.target);
                this.currentCategory = e.target.dataset.category;
                this.filterSkills();
            });
        });

        // Proficiency filter
        const proficiencySelect = document.getElementById('proficiencySelect');
        proficiencySelect.addEventListener('change', (e) => {
            this.currentProficiency = e.target.value;
            this.filterSkills();
        });

        // Modal close functionality
        const modalOverlay = document.getElementById('skillModal');
        const modalClose = document.querySelector('.modal-close');
        
        modalClose.addEventListener('click', () => {
            this.closeModal();
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                this.closeModal();
            }
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

        // Navigation smooth scrolling
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    this.smoothScrollTo(href);
                    this.setActiveNavLink(link);
                }
            });
        });
    }

    setActiveTab(activeTab) {
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        activeTab.classList.add('active');
    }

    setActiveNavLink(activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    filterSkills() {
        this.filteredSkills = this.skills.filter(skill => {
            const matchesCategory = this.currentCategory === 'all' || skill.category === this.currentCategory;
            const matchesProficiency = this.currentProficiency === 'all' || skill.proficiency === this.currentProficiency;
            const matchesSearch = this.currentSearchTerm === '' || 
                skill.title.toLowerCase().includes(this.currentSearchTerm) ||
                skill.description.toLowerCase().includes(this.currentSearchTerm) ||
                skill.tags.some(tag => tag.toLowerCase().includes(this.currentSearchTerm)) ||
                skill.applications.some(app => app.toLowerCase().includes(this.currentSearchTerm));
            
            return matchesCategory && matchesProficiency && matchesSearch;
        });

        this.renderSkills();
    }

    renderSkills() {
        const skillsGrid = document.getElementById('skillsGrid');
        
        if (this.filteredSkills.length === 0) {
            skillsGrid.innerHTML = `
                <div class="no-results">
                    <h3>No skills found</h3>
                    <p>Try adjusting your search criteria or filters.</p>
                </div>
            `;
            return;
        }

        skillsGrid.innerHTML = this.filteredSkills.map(skill => `
            <div class="skill-card" onclick="app.openSkillModal(${skill.id})">
                <div class="skill-header">
                    <div>
                        <h3 class="skill-title">${skill.title}</h3>
                        <span class="skill-category-badge ${skill.category}">${skillsDatabase.categories[skill.category]}</span>
                    </div>
                </div>
                <p class="skill-description">${skill.description}</p>
                <div class="skill-meta">
                    <div class="skill-proficiency">
                        <span>Proficiency:</span>
                        <div class="proficiency-dots">
                            ${this.renderProficiencyDots(skill.proficiency)}
                        </div>
                        <span class="proficiency-label">${this.capitalizeFirst(skill.proficiency)}</span>
                    </div>
                    <div class="skill-applications-count">
                        ${skill.applications.length} applications
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderProficiencyDots(proficiency) {
        const level = skillsDatabase.proficiencyLevels[proficiency];
        let dots = '';
        for (let i = 1; i <= 3; i++) {
            dots += `<span class="proficiency-dot ${i <= level ? 'filled' : ''}"></span>`;
        }
        return dots;
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    openSkillModal(skillId) {
        const skill = this.skills.find(s => s.id === skillId);
        if (!skill) return;

        const modal = document.getElementById('skillModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalCategory = document.getElementById('modalCategory');
        const modalDescription = document.getElementById('modalDescription');
        const modalApplications = document.getElementById('modalApplications');
        const modalProficiency = document.getElementById('modalProficiency');

        modalTitle.textContent = skill.title;
        modalCategory.innerHTML = `
            <h4>Category</h4>
            <span class="skill-category-badge ${skill.category}">${skillsDatabase.categories[skill.category]}</span>
        `;
        
        modalDescription.innerHTML = `
            <h4>Description</h4>
            <p>${skill.detailedDescription}</p>
        `;

        modalApplications.innerHTML = `
            <h4>Key Applications</h4>
            <ul>
                ${skill.applications.map(app => `<li>${app}</li>`).join('')}
            </ul>
        `;

        modalProficiency.innerHTML = `
            <h4>Proficiency Level</h4>
            <div class="proficiency-display">
                <div class="proficiency-dots">
                    ${this.renderProficiencyDots(skill.proficiency)}
                </div>
                <span class="proficiency-label">${this.capitalizeFirst(skill.proficiency)}</span>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('skillModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    performSearch() {
        const searchInput = document.getElementById('searchInput');
        this.currentSearchTerm = searchInput.value.toLowerCase();
        this.filterSkills();
        
        // Scroll to skills section
        this.smoothScrollTo('#skills');
    }

    smoothScrollTo(target) {
        const element = document.querySelector(target);
        if (element) {
            // Get the header height to offset the scroll position
            const header = document.querySelector('.nav-header');
            const headerHeight = header ? header.offsetHeight : 0;
            
            // Calculate the target position minus the header height
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    }

    setupSmoothScrolling() {
        // Intersection Observer for navigation highlighting
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                    if (activeLink) {
                        navLinks.forEach(link => link.classList.remove('active'));
                        activeLink.classList.add('active');
                    }
                }
            });
        }, {
            threshold: 0.3
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }
}

// Global functions for button actions
function scrollToSkills() {
    app.smoothScrollTo('#skills');
}

function showHowToUse() {
    const modal = document.getElementById('skillModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    const modalApplications = document.getElementById('modalApplications');
    const modalProficiency = document.getElementById('modalProficiency');

    modalTitle.textContent = 'How to Use This Database';
    modalCategory.innerHTML = '';
    
    modalDescription.innerHTML = `
        <h4>Getting Started</h4>
        <p>This AI Skills Database helps accounting professionals, educators, and students explore and develop AI competencies. Here's how to make the most of it:</p>
    `;

    modalApplications.innerHTML = `
        <h4>Navigation Guide</h4>
        <ul>
            <li><strong>Browse All Skills:</strong> Scroll through the complete collection of 15 AI skills organised by category</li>
            <li><strong>Filter by Category:</strong> Use the tabs to focus on Core Technical, Strategic & Advisory, or Complementary Human skills</li>
            <li><strong>Filter by Level:</strong> Select Basic, Intermediate, or Advanced to match your current expertise</li>
            <li><strong>Search Skills:</strong> Type keywords in the search bar to find specific skills or applications</li>
            <li><strong>View Details:</strong> Click any skill card to see detailed descriptions, applications, and proficiency requirements</li>
        </ul>
    `;

    modalProficiency.innerHTML = `
        <h4>Proficiency Levels Explained</h4>
        <div class="proficiency-guide">
            <div class="proficiency-level">
                <div class="proficiency-dots">
                    <span class="proficiency-dot filled"></span>
                    <span class="proficiency-dot"></span>
                    <span class="proficiency-dot"></span>
                </div>
                <span><strong>Basic:</strong> Foundational awareness and understanding - suitable for beginners</span>
            </div>
            <div class="proficiency-level">
                <div class="proficiency-dots">
                    <span class="proficiency-dot filled"></span>
                    <span class="proficiency-dot filled"></span>
                    <span class="proficiency-dot"></span>
                </div>
                <span><strong>Intermediate:</strong> Practical implementation and customisation capabilities</span>
            </div>
            <div class="proficiency-level">
                <div class="proficiency-dots">
                    <span class="proficiency-dot filled"></span>
                    <span class="proficiency-dot filled"></span>
                    <span class="proficiency-dot filled"></span>
                </div>
                <span><strong>Advanced:</strong> Expert-level design, leadership, and strategic implementation</span>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function performSearch() {
    app.performSearch();
}

function closeModal() {
    app.closeModal();
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new AISkillsApp();
});

// Add some additional CSS for elements created by JavaScript
const additionalStyles = `
<style>
.no-results {
    grid-column: 1 / -1;
    text-align: center;
    padding: var(--spacing-3xl);
    color: var(--text-secondary);
}

.no-results h3 {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
}

.proficiency-display {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.proficiency-label {
    font-weight: 500;
    color: var(--text-primary);
}

.industry-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
}

.industry-tag {
    background-color: var(--background-grey);
    color: var(--text-secondary);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-xs);
    font-weight: 500;
}

.skill-applications-count {
    font-size: var(--font-size-xs);
    color: var(--text-secondary);
    font-weight: 500;
}

/* Modal responsive improvements */
@media (max-width: 480px) {
    .modal-content {
        padding: var(--spacing-lg);
    }
    
    .industry-tags {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
`;

// Add the additional styles to the document
document.head.insertAdjacentHTML('beforeend', additionalStyles);