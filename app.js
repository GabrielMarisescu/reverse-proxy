const express = require('express');
const axios = require('axios');
const cors = require('cors');

app.use(cors({ origin: '*' }));

const app = express();
app.get(':endpoint([\\/\\w\\.-]*)', function (req, res) {
  let endpoint = 'https://www.virustotal.com/api/v3' + req.params.endpoint;
  axios.default
    .get(endpoint)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => res.json(err));
});

app.listen(3000);
