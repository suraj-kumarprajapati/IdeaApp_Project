/**
 * This is the main starting file of the project
 */

const express = require('express');
const app = express();

app.use(express.json());      // convert json to js object


// stitching the route here
require('./routes/ideas.route')(app);


/**
 * Start the server
 */
app.listen(8000, ()=>{
  console.log("App started at port number : ", 8000);
})