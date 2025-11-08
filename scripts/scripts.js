document.getElementById("lastModified").innerHTML = document.lastModified;

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const memberSpotlight = document.getElementById('member-spotlight');

    // --- 1. Mobile Menu Toggle ---
    menuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
        mobileNav.style.display = isExpanded ? 'none' : 'block';
        this.setAttribute('aria-expanded', !isExpanded);
    });

    // --- 2. Fetch and Display Featured Members ---
    async function getFeaturedMembers() {
        if (!memberSpotlight) return; // Only run on pages with this section

        try {
            // Fetch data from the local JSON file
            const response = await fetch('members.json'); 
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const members = await response.json();

            // Clear the "Loading" message
            memberSpotlight.innerHTML = ''; 

            // Display all 7 members (or as many as available)
            members.slice(0, 7).forEach(member => {
                const card = document.createElement('div');
                card.classList.add('member-card');
                card.setAttribute('role', 'article');
                
                // Add class based on membership level for potential styling
                card.classList.add(`level-${member.membership_level.toLowerCase()}`); 

                card.innerHTML = `
                    <h3 class="member-name"><a href="${member.website_url}" target="_blank">${member.name}</a></h3>
                    <span class="level-badge">${member.membership_level} Member</span>
                    <p class="member-description">${member.description}</p>
                    <p class="member-sector">Sector: ${member.activity_sector}</p>
                    <a href="tel:${member.phone}" class="member-contact-btn">Call ${member.phone}</a>
                `;
                memberSpotlight.appendChild(card);
            });

        } catch (error) {
            console.error('Could not fetch members:', error);
            memberSpotlight.innerHTML = '<p class="error-message">Could not load member listings. Please check the members.json file path.</p>';
        }
    }

    getFeaturedMembers();
});