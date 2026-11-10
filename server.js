//Task 2: Create the Express Server
// Create a file named server.js.
// Inside this file, set up a basic Express server that listens on a port (e.g., 3000) and logs a message to the console on startup.


const express = require('express');

const app = express();
const PORT = 3000;

// GET route the coffee shop screen will call
app.get('/api/fun-fact', async (req, res) => {
  try {
    // Ask the Useless Facts API for a random fact
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');

    // Turn the answer into a JavaScript object
    const data = await response.json();

    // Send only the fact text, not the whole object
    res.json({ fact: data.text });
  } catch (error) {
    // Something went wrong, so send a simple error message
    res.status(500).json({ error: 'Could not fetch fun fact' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
