const express = require("express");
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());

const hostURL = 'https://9395342-sb1.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=60&deploy=1&compid=9395342_SB1&h=b1f0f120b7294d147886';

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => { res.send("Welcome SuiteAccess"); });

app.post('/admin/login', async (req, res) => {
  try {
    const response = await axios.post(hostURL, { "route": "adminLogIn", "email": req.body.email, "password": req.body.password }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send(JSON.stringify(error));
    //res.status(500).send('Internal Server Error');
  }
});

app.post('/admin/register', async (req, res) => {
  try {
    const response = await axios.post(hostURL, { "route": "adminRegister", "name": req.body.name, "phone": req.body.phone, "companycode": req.body.companycode, "email": req.body.email, "password": req.body.password }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send(JSON.stringify(error));
    //res.status(500).send('Internal Server Error');
  }
});

app.get('/admin/users', async (req, res) => {
  try {
    const response = await axios.post(hostURL, { "route": "adminUserLoad", "companycode": req.query.companycode }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/admin/users/submit', async (req, res) => {
  try {
    const response = await axios.post(hostURL, { "route": "submitUser", "userData": req.body }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/admin/update', async (req, res) => {
  try {
    const response = await axios.post(hostURL, { "route": "updateAdmin", "updateData": req.body }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/users', async (req, res) => {
  try {
    const response = await axios.post(req.query.url, { "route": "userLoad" }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/users/getSummary', async (req, res) => {
  try {
    const response = await axios.post(req.query.url, { "route": "getAccessSummary" }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/users/submit', async (req, res) => {
  try {
    const response = await axios.post(req.body.url, { "route": "submitUser", "userData": req.body.userData }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/records', async (req, res) => {
  try {
    const response = await axios.post(req.query.url, { "route": "recordLoad" }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/portals', async (req, res) => {
  try {
    const response = await axios.post(req.query.url, { "route": "portalLoad" }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/portals/load/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.post(req.query.url, { "route": "portalFieldsLoad", "id": id }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/portals/submit', async (req, res) => {
  try {
    const response = await axios.post(req.body.url, { "route": "submitPortal", "id": req.body.id, "status": req.body.status, "name": req.body.name, "content": req.body.content }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/portals/delete', async (req, res) => {
  try {
    const response = await axios.post(req.body.url, { "route": "deleteRecord", "id": req.body.id, "type": "portal" }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/templates', async (req, res) => {
  try {
    const response = await axios.post(req.query.url, { "route": "templateLoad" }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send(JSON.stringify(error));
    res.status(500).send('Internal Server Error');
  }
});

app.get('/templates/create/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const response = await axios.post(req.query.url, { "route": "recordFieldsLoad", "recordType": type }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/templates/load/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.post(req.query.url, { "route": "templateFieldsLoad", "id": id }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/templates/submit', async (req, res) => {
  try {
    const response = await axios.post(req.body.url, { "route": "submitTemplate", "id": req.body.id, "type": req.body.type, "status": req.body.status, "name": req.body.name, "template": req.body.sublists }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/templates/delete', async (req, res) => {
  try {
    const response = await axios.post(req.body.url, { "route": "deleteRecord", "id": req.body.id, "type": "template" }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/user/login', async (req, res) => {
  try {
    const responseHost = await axios.post(hostURL, { "route": "getCompanyInfo", "companycode": req.body.companycode }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    if (!responseHost.data.error) {
      try {
        const response = await axios.post(responseHost.data.url, { "route": "userLogIn", "email": req.body.email, "password": req.body.password }, {
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0'
          },
        });
        const responseData = {
          data: response.data,
          company: responseHost.data
        };
        res.status(200).send(responseData);
      } catch (error) {
        console.error('Error in third-party API request:', error);
        res.status(500).send(JSON.stringify(error));
      }
    } else {
      res.status(200).json(responseHost.data);
    }
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send(JSON.stringify(error));
    //res.status(500).send('Internal Server Error');
  }
});

app.post('/user/register', async (req, res) => {
  try {
    const responseHost = await axios.post(hostURL, { "route": "getCompanyInfo", "companycode": req.body.companycode }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    if (!responseHost.data.error) {
      try {
        const response = await axios.post(responseHost.data.url, { "route": "userRegister", "name": req.body.name, "email": req.body.email, "password": req.body.password, "companyName": req.body.companyname }, {
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0'
          },
        });
        res.status(200).json(response.data);
      } catch (error) {
        console.error('Error in third-party API request:', error);
        res.status(500).send(JSON.stringify(error));
      }
    } else {
      res.status(200).json(responseHost.data);
    }
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send(JSON.stringify(error));
    //res.status(500).send('Internal Server Error');
  }
});


app.post('/user/update', async (req, res) => {
  try {
    const response = await axios.post(req.body.url, { "route": "userUpdate", "updateData": req.body }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/user/portals', async (req, res) => {
  try {
    const response = await axios.post(req.query.url, { "route": "userPortalLoad", "userId": req.query.id, "userToken": req.query.token }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/user/portals/load/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.post(req.query.url, { "route": "userPortalFieldsLoad", "id": id, "userId": req.query.user, "userToken": req.query.token }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/user/record/load', async (req, res) => {
  try {
    const response = await axios.post(req.query.url, { "route": "userRecordFieldsLoad", "userId": req.query.userId, "userToken": req.query.userToken, "id": req.query.id, "type": req.query.type, "template": req.query.template, "parType": req.query.parType }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/user/record/itemload', async (req, res) => {
  try {
    const response = await axios.post(req.query.url, { "route": "getItemInfo", "recordType": req.query.type, "value": req.query.value, "item": req.query.item }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/user/record/create', async (req, res) => {
  try {
    const response = await axios.post(req.query.url, { "route": "userRecordFieldsLoad", "userId": req.query.userId, "userToken": req.query.userToken, "type": req.query.type, "template": req.query.template, "parType": req.query.parType, "entityAvailable": req.query.entityAvailable, "entityId": req.query.entityId }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/user/record/save', async (req, res) => {
  try {
    const response = await axios.post(req.body.url, { "route": "recordSave", "userId": req.body.userId, "userToken": req.body.userToken, "id": req.body.id, "type": req.body.type, "entityId": req.body.entityId, "recordData": req.body.recordData, "newRecordData": req.body.newRecordData, "removeLines": req.body.removeLines }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/user/record/transform', async (req, res) => {
  try {
    const response = await axios.post(req.body.url, { "route": "recordTransform", "userId": req.body.userId, "userToken": req.body.userToken, "id": req.body.id, "type": req.body.type, "transformInfo": req.body.transformInfo }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/user/record/getshipping', async (req, res) => {
  try {
    const response = await axios.post(req.body.url, { "route": "getShippingCost", "userId": req.body.userId, "userToken": req.body.userToken, "data": req.body }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/user/record/ordersubmit', async (req, res) => {
  try {
    const response = await axios.post(req.body.url, { "route": "orderSubmit", "userId": req.body.userId, "userToken": req.body.userToken, "data": req.body }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in third-party API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 5000; app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

module.exports = app;