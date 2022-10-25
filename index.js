const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const coursesData = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Successfully server running');
})

app.get('/courses', (req, res) => {
    res.send(coursesData);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = coursesData.find(c => c.id === id);
    if (!singleCourse) {
        res.send('404 Data Not Found')
    }
    res.send(singleCourse);
})

app.listen(port, () => {
    console.log('app listening from port', port);
})