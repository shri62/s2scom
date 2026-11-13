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

// Task 2: Create the Express Server
// Task 3: Create the API Route
// Task 4: Fetch from an External API
// Task 5: Handle and Respond with Data

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// GET route: fetch a random fun fact from the Useless Facts API
app.get('/api/fun-fact', async (req, res) => {
  try {
    // Ask the Useless Facts API for a random fact
    const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');

    // axios already parses the JSON, so the data is in response.data
    // Send only the fact text, not the whole object
    res.json({ fact: response.data.text });
  } catch (error) {
    // Log the real error on the server only
    console.error('Failed to fetch fun fact:', error.message);

    // Send a generic error message to the client
    res.status(500).json({ error: 'Could not fetch fun fact' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});