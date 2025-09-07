async function loadStudents() {
  const res = await fetch('/api/students');
  const students = await res.json();
  const list = document.getElementById('student-list');
  list.innerHTML = '';
  students.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    list.appendChild(li);
  });
}

document.getElementById('student-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('student-name').value;
  if (!name) return;
  await fetch('/api/students', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });
  document.getElementById('student-name').value = '';
  loadStudents();
});

// load on start
loadStudents();
