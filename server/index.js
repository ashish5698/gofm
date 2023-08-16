const express = require("express", cors = require('cors'));

// Initialize Express
const app = express();

app.use(cors({
    origin: '*'
}))

// Create GET request
app.get("/currentsong", async (req, res, body) => {
    const fetch = (...args) => import('node-fetch')
  .then(({default: fetch}) => fetch(...args));
    try {
        const apiResponse = await fetch(
            'http://173.249.15.117:9128/currentsong?sid=1')
        const apiResponseJson = await apiResponse.text()

        res.send(apiResponseJson)
      } catch (err) {
        console.log(err)
        res.status(500).send('Something went wrong')
      }
});

// Initialize server
app.listen(5005, () => {
  console.log("Running on port 5005.");
});

module.exports = app;