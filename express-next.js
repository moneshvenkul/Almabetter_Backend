const express = require('express');
const app = express();
const port = 3000;

// First middleware function
app.use((req, res, next) => {
    console.log('First Middleware');
    // Adding a property to req object to be used in the next middleware
    req.customData = 'Hello from First Middleware';
    next(); // Passing control to the next middleware
});

// Second middleware function
app.use((req, res, next) => {
    console.log('Second Middleware');
    console.log(req.customData); // Accessing data from the previous middleware
    next(); // Passing control to the next middleware
});

// Route handler as the final step in the middleware chain
app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log("Hello World!")
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
