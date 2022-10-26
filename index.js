const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000; 

const coursesData = require('./data/courses.json');
const course = require('./data/course.json');
const checkoutData = require('./data/checkout.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Successfully server running');
})

app.get('/courses', (req, res) => {
    res.send(coursesData);
})

app.get('/course', (req, res) => {
    res.send(course);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const coursedata = course.find(cd => cd.id === id);
    res.send(coursedata);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = coursesData.find(c => c.id === id);
    if (!singleCourse) {
        res.send('404 Data Not Found')
    }
    res.send(singleCourse);
})

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id; 
    const singleCheckout = checkoutData.find(cd => cd._id === id);
    res.send(singleCheckout);
})


app.listen(port, () => {
    console.log('app listening from port', port);
});
