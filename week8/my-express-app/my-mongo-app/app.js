// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For HTML form POST
app.use(express.static(path.join(__dirname, 'public'))); // Serve static HTML

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/students')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Schema and model
const Student = mongoose.model('Student', {
  name: String,
  age: Number
});

// Routes
app.post('/add', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send('<h3>✅ Student added successfully!</h3><a href="/form.html">Go Back</a>');
  } catch (err) {
    res.status(500).send('❌ Error adding student.');
  }
});

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).send('❌ Error fetching students.');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
