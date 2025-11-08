// ... (Your 'courses' array here)

const cardsContainer = document.getElementById('course-cards');
const totalCreditsSpan = document.getElementById('total-credits');
const filterButtons = document.querySelectorAll('#course-filters button');

// Function to calculate total credits using reduce()
function getTotalCredits(courseArray) {
    return courseArray.reduce((total, course) => total + course.credits, 0);
}

// Function to display (render) the course cards
function displayCourses(courseList) {
    cardsContainer.innerHTML = ''; // Clear existing content
    
    courseList.forEach(course => {
        const card = document.createElement('div');
        // Apply a distinct style/class for completed courses
        card.classList.add('course-card');
        if (course.completed) {
            card.classList.add('completed');
        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>Title: ${course.title}</p>
            <p>Credits: ${course.credits}</p>
        `;
        cardsContainer.appendChild(card);
    });

    // Update the total credits display
    totalCreditsSpan.textContent = getTotalCredits(courseList);
}

// Event listener for filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const filterType = event.target.getAttribute('data-filter');
        let filteredCourses;

        if (filterType === 'All') {
            filteredCourses = courses;
        } else {
            // Filter by subject
            filteredCourses = courses.filter(course => course.subject === filterType);
        }

        displayCourses(filteredCourses);
    });
});

