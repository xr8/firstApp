// installed on node_modules folder
const express = require('express');

// initializing the app
const app = express();


// bootstraping the app
app.listen(3000, () => {
  console.log('Express app started on port 3000');
});