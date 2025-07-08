// Initialize AOS animations
AOS.init({
  duration: 1000,
  once: true
});

// Q&A Chatbot Logic 
const qaToggle = document.getElementById('qa-toggle');
const qaBox = document.getElementById('qa-box');
const qaClose = document.getElementById('qa-close');
const qaInput = document.getElementById('qa-input');
const qaMessages = document.getElementById('qa-messages');

// Toggle chatbot box
qaToggle.onclick = () => {
  qaBox.style.display = 'flex';
  qaInput.focus();
};
qaClose.onclick = () => {
  qaBox.style.display = 'none';
};

// Define bot response logic
function getAnswer(question) {
  const q = question.toLowerCase();

  if (q.includes('name') || q.includes('who are you')) {
    return "My name is <strong>Evanka Fauzya</strong>, a web developer enthusiast and informatics student.";
  }

  if (q.includes('gpa') || q.includes('score')) {
    return "My GPA is <strong>3.94</strong>.";
  }

  if (q.includes('major') || q.includes('study')) {
    return "I'm majoring in <strong>Informatics</strong> at President University.";
  }

  if (q.includes('university') || q.includes('campus')) {
    return "I'm studying at <strong>President University</strong>.";
  }

  if (q.includes('cv') || q.includes('resume')) {
    return 'You can download my CV here: <a href="/static/files/evanka-cv.pdf" download>Download CV</a>';
  }

  if (q.includes('experience') || q.includes('work') || q.includes('background')) {
    return "I've worked as a <strong>Web Manager</strong> for President University’s eCampus, and built tools for Mattel and student communities.";
  }

  if (q.includes('project') || q.includes('portfolio')) {
    return `
      My projects include:
      <ul>
        <li><strong>5S Audit Tool</strong> – Flask + OpenCV + AI</li>
        <li><strong>Fessme</strong> – Anonymous student forum (PHP + JS)</li>
        <li><strong>Photobooth App</strong> – Flask-based layout tool</li>
        <li>...and more!</li>
      </ul>`;
  }

  if (q.includes('tech') || q.includes('tools')) {
    return "I use <strong>Flask</strong>, <strong>Tailwind</strong>, <strong>OpenCV</strong>, <strong>PHP</strong>, <strong>JavaScript</strong>, <strong>MySQL</strong>, and <strong>SQLite</strong>.";
  }

  if (q.includes('contact') || q.includes('email')) {
    return 'You can email me at <strong>evankafauzya30@gmail.com</strong> or reach out on <a href="https://linkedin.com/in/evankafauzya/" target="_blank">LinkedIn</a>.';
  }

  if (q.includes('linkedin')) {
    return '<a href="https://linkedin.com/in/evankafauzya/" target="_blank">Click here to view my LinkedIn</a>';
  }

  return "Hmm, I'm not sure how to answer that yet. Try asking about my university, experience, or tech stack!";
}

// Handle input
qaInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && this.value.trim() !== '') {
    const question = this.value.trim();
    qaMessages.innerHTML += `<div><strong>You:</strong> ${question}</div>`;
    const response = getAnswer(question);
    qaMessages.innerHTML += `<div><strong>EvankaBot:</strong> ${response}</div>`;
    this.value = '';
    qaMessages.scrollTop = qaMessages.scrollHeight;
  }
});
