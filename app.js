// Copyright 2018, Google LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*eslint-disable no-unused-params */
'use strict';

const express = require('express');
const path = require("path");
const app = express();
const nodemailer = require("nodemailer");


//Routes
app.get('/', (req,res) =>{ 
     res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/home', (req,res) =>{ 
     res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/about', (req,res) =>{ 
     res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/memberships', (req,res) =>{ 
     res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/bootcamp', (req,res) =>{ 
     res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/contact', (req,res) =>{ 
     res.sendFile(path.join(__dirname+'/index.html'));
});
app.use(express.static(__dirname));



if (module === require.main) {
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
