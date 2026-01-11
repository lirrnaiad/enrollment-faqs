const faqs = [
    {
        "question": "Where can I connect to UEPStudentWifi?",
        "answer": "You can find the UEPStudentWifi network at the College of Science, RDE Building, or Academic Building."
    },
    {
        "question": "What's the link to the Student Portal?",
        "answer": "The link for the Student Portal is <a href='http://student.uep.edu.ph' target='_blank'>http://student.uep.edu.ph</a>."
    },
    {
        "question": "I can't connect to the Student Portal!",
        "answer": "Please make sure you're connected to the UEPStudentWifi network first."
    },
    {
        "question": "I can't log in to the Student Portal!",
        "answer": "Please reload or try again later. There might be an issue with the network/server."
    },
    {
        "question": "I can't find the Enrollment tab!",
        "answer": "Please approach our Department Head at the Dean's Office."
    },
    {
        "question": "I can't find my section!",
        "answer": "A subject for Section B will only appear if the slots for that subject in Student A is full. Likewise, a subject for Section C will only appear if the slots for the subject in Section B is full, and so on..."
    },
    {
        "question": "I can't find my subject!",
        "answer": "Please ensure that your curriculum (found below your name) is correct by checking the school year. Approach the Department Head for fixes."
    }
];

const container = document.getElementById('faq-container');

faqs.forEach((faq, index) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.onclick = () => toggleAccordion(item);
    
    item.innerHTML = `
        <div class="faq-question">
            <span>${faq.question}</span>
            <span class="icon">+</span>
        </div>
        <div class="faq-answer">
            <p>${faq.answer}</p>
        </div>
    `;
    container.appendChild(item);
});

document.getElementById('year').textContent = new Date().getFullYear();

function toggleAccordion(element) {
    const isActive = element.classList.contains('active');
    
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.icon').textContent = '+';
    });

    if (!isActive) {
        element.classList.add('active');
        element.querySelector('.icon').textContent = '−';
    }
}
