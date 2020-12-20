const http = require('http');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("express"));

// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });

const server = http.createServer(app);
const port = 4040;

const nodemailer = require('nodemailer');

app.post('/api/contact', async(req, res, next) => {
  const { name, email, phone, subject } = req.body;
  console.log("sendMail fired: ", req.body, name, email, phone, subject);

  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'desmoinesdm@gmail.com',
          pass: 'dillontj2020',
      }
  });

  let mailOptions = await transporter.sendMail({
      from: `info@desmoinesdm.com`,
      to: `${email}`,
      subject: `Des Moines Development & Marketing`,
      text:
          `${name}, \n\n` +
          `Thank you for contacting Des Moines Development and Marketing! A representative will contact you within 2 business days. \n\n` +
          `If you have any further question, feel free to email us at:  \n\n` +
          `info@desmoinesdm.com \n\n` +
          `- Des Moines Development & Marketing Automated Message`
  });

  console.log('Message sent: %s', mailOptions.messageId);

  let mailOptions2 = await transporter.sendMail({
    from: `info@desmoinesdm.com`,
    to: `desmoinesdm@gmail.com`,
    subject: `Des Moines Development & Marketing Inquiry`,
    text:
        `Name: ${name}, \n\n` +
        `Email: ${email}, \n\n` +
        `Phone: ${phone}, \n\n` +
        `Subject: ${subject}, \n\n`
  });

  console.log('Message sent: %s', mailOptions2.messageId);

  res.send('Email sent!')   
})


server.listen(port);

console.debug('Server listening on port ' + port);
