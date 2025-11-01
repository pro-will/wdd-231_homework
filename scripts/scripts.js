document.getElementById("lastModified").innerHTML = document.lastModified;

const courses = [
{ id: 'course-name', name: 'Introduction to Programming', subject: 'CSE', number: 110, credits: 2, certificate: 'Web and Computer Programming', description: 'This course will introduce students to programming...', technology: ['Python'], completed: true },
{ id: 'course-name', name: 'Web Fundamentals', subject: 'WDD', number: 130, credits: 2, certificate: 'Web and Computer Programming', description: 'This course introduces students to the World Wide Web...', technology: ['HTML', 'CSS'], completed: true },
{ id: 'course-name', name: 'Programming with Functions', subject: 'CSE', number: 111, credits: 2, certificate: 'Web and Computer Programming', description: 'Students become more efficient programmers...', technology: ['Python'], completed: true },
{ id: 'course-name', name: 'Programming with Classes', subject: 'CSE', number: 210, credits: 2, certificate: 'Web and Computer Programming', description: 'This course will introduce the notion of classes...', technology: ['C#'], completed: 'in progress' },
{ id: 'course-name', name: 'Dynamic Web Fundamentals', subject: 'WDD', number: 131, credits: 2, certificate: 'Web and Computer Programming', description: 'Students learn to create dynamic websites...', technology: ['HTML', 'CSS', 'JavaScript'], completed: true },
{ id: 'course-name', name: 'Frontend Web Development I', subject: 'WDD', number: 231, credits: 2, certificate: 'Web and Computer Programming', description: 'Students focus on user experience, accessibility...', technology: ['HTML', 'CSS', 'JavaScript'], completed: 'in progress' }
];


const courseList = document.getElementById('courseList');
const subjectFilter = document.getElementById('subjectFilter');
const statusFilter = document.getElementById('statusFilter');
const resetBtn = document.getElementById('resetBtn');


function renderCourses(filteredCourses) {
courseList.innerHTML = '';
if (filteredCourses.length === 0) {
courseList.innerHTML = '<p style="text-align:center; color:#666;">No courses found for selected filters.</p>';
return;
}
filteredCourses.forEach(course => {
const div = document.createElement('div');
div.className = `course ${course.subject}`;
div.innerHTML = `
<h2>${course.name}</h2>
<p><strong>Subject:</strong> ${course.subject}</p>
<p><strong>Status:</strong> ${course.completed}</p>
<p>${course.description}</p>
<p class="tech-list"><strong>Tech:</strong> ${course.technology.join(', ')}</p>
`;
courseList.appendChild(div);
});
}


function filterCourses() {
const subjectValue = subjectFilter.value;
const statusValue = statusFilter.value;
let filtered = courses;


if (subjectValue) {
filtered = filtered.filter(c => c.subject === subjectValue);
}
if (statusValue) {
filtered = filtered.filter(c => c.completed == statusValue);
}
renderCourses(filtered);
}


subjectFilter.addEventListener('change', filterCourses);
statusFilter.addEventListener('change', filterCourses);


resetBtn.addEventListener('click', () => {
subjectFilter.value = '';
statusFilter.value = '';
renderCourses(courses);
});


// Display all courses by default
renderCourses(courses);