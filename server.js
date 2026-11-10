//Task 2: Create the Express Server
// Create a file named server.js.
// Inside this file, set up a basic Express server that listens on a port (e.g., 3000) and logs a message to the console on startup.
// Task 3: Create the API Route
// In server.js, create a new GET route at the path /api/fun-fact.
// This route will be responsible for fetching the data and sending it to the client.
// Task 4: Fetch from an External API
// For this lab, we will use the Useless Facts API , which provides random facts and requires no API key. The endpoint for a random fact is https://uselessfacts.jsph.pl/api/v2/facts/random.
// Inside your /api/fun-fact route handler, use axios to make a GET request to this URL.
// Remember to use async/await and wrap your API call in a try...catch block to handle potential errors.
// Task 5: Handle and Respond with Data

const express = require('express');

const app = express();
const PORT = 3000;

// GET route 
app.get('/api/fun-fact', async (req, res) => {
  try {
    // Ask the Useless Facts 
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');

    // Turn the answer into a JavaScript object
    const data = await response.json();

    // Send only the fact text, 
    res.json({ fact: data.text });
  } catch (error) {
    // Something got wrong, so send a simple error message
    res.status(500).json({ error: 'Could not fetch fun fact' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
