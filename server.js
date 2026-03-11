const express = require('express')
const app = express() 

// GET route
app.get('/', (req, res) => {
    res.send('Welcome to Express Activity')
})

// GET /student
app.get('/student', (req, res) => {
    res.send('List of students')
})

// Route param
app.get('/students/:id', (req, res) => {
    res.send('Student ID: ' + req.params.id)
})

// Query param
app.get('/search', (req, res) => {
    res.send('Name: ' + req.query.name)
})

// POST route
app.post('/student', (req, res) => {
    res.send('Student created')
})

// PUT route
app.put('/student', (req, res) => {
    res.send('Student updated')
})

// DELETE route
app.delete('/student', (req, res) => {
    res.send('Student deleted')
})

// Run server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})
