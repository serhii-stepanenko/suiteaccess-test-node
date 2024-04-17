const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());

const hostURL = 'https://9395342-sb1.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=60&deploy=1&compid=9395342_SB1&h=b1f0f120b7294d147886';

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => { res.send("Welcome SuiteAccess"); });

app.post('/api/admin/login', async (req, res) => {
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

app.post('/api/admin/register', async (req, res) => {
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

app.get('/api/admin/users', async (req, res) => {
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

app.post('/api/admin/users/submit', async (req, res) => {
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

app.post('/api/admin/update', async (req, res) => {
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

app.get('/api/users', async (req, res) => {
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

app.get('/api/users/getSummary', async (req, res) => {
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

app.post('/api/users/submit', async (req, res) => {
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

app.get('/api/records', async (req, res) => {
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

app.get('/api/portals', async (req, res) => {
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

app.get('/api/portals/load/:id', async (req, res) => {
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

app.post('/api/portals/submit', async (req, res) => {
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

app.post('/api/portals/delete', async (req, res) => {
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

app.get('/api/templates', async (req, res) => {
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

app.get('/api/templates/create/:type', async (req, res) => {
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

app.get('/api/templates/load/:id', async (req, res) => {
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

app.post('/api/templates/submit', async (req, res) => {
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

app.post('/api/templates/delete', async (req, res) => {
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

app.post('/api/user/login', async (req, res) => {
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

app.post('/api/user/register', async (req, res) => {
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


app.post('/api/user/update', async (req, res) => {
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

app.get('/api/user/portals', async (req, res) => {
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

app.get('/api/user/portals/load/:id', async (req, res) => {
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

app.post('/api/user/record/load', async (req, res) => {
  try {
    const response = await axios.post(req.body.url, { "route": "userRecordFieldsLoad", "userId": req.body.userId, "userToken": req.body.userToken, "id": req.body.id, "type": req.body.type, "template": req.body.template, "parType": req.body.parType }, {
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

app.post('/api/user/record/itemload', async (req, res) => {
  try {
    const response = await axios.post(req.body.url, { "route": "getItemInfo", "recordType": req.body.type, "value": req.body.value, "item": req.body.item }, {
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

app.post('/api/user/record/create', async (req, res) => {
  try {
    const response = await axios.post(req.body.url, { "route": "userRecordFieldsLoad", "userId": req.body.userId, "userToken": req.body.userToken, "type": req.body.type, "template": req.body.template, "parType": req.body.parType, "entityAvailable": req.body.entityAvailable, "entityId": req.body.entityId }, {
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

app.post('/api/user/record/save', async (req, res) => {
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

app.post('/api/user/record/transform', async (req, res) => {
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

app.post('/api/user/record/getshipping', async (req, res) => {
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

app.post('/api/user/record/ordersubmit', async (req, res) => {
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