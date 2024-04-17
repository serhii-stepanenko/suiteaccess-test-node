const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());

const hostURL = 'https://9395342-sb1.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=60&deploy=1&compid=9395342_SB1&h=b1f0f120b7294d147886';

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => { res.send("Welcome SuiteAccess"); });

const PORT = process.env.PORT || 5000; app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

module.exports = app;