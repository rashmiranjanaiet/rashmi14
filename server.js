const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// simple memory store
let students = [];

// get all students
app.get('/api/students', (req, res) => {
  res.json(students);
});

// add a student
app.post('/api/students', (req, res) => {
  const { name } = req.body;
  if (!name || name.trim() === "") {
    return res.status(400).json({ error: "Name is required" });
  }
  students.push(name.trim());
  res.json({ success: true, students });
});

app.listen(PORT, () => {
  console.log(`College site running at http://localhost:${PORT}`);
});
