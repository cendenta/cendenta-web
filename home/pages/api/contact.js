const AWS = require('aws-sdk');
const SES = new AWS.SES({ 
    accessKeyId: process.env.SES_ACCESS_KEY,
    secretAccessKey: process.env.SES_SECRET_ACCESS,
    region: 'us-east-1' 
});
var validator = require('validator');
    
const handler = async (req, res) => {
    const { email, fullName, message, phone } = req.body;

    const isValid = 
        validator.isEmail(email) && 
        validator.isMobilePhone(phone) &&
        !validator.isEmpty(fullName) &&
        !validator.isEmpty(message);

    if(isValid){
        console.log('REQ BODY', req.body);
        const sesParams = {
            Destination: {
              ToAddresses: ["contact@cendenta.com"],
            },
            Message: {
              Body: {
                Text: {
                  Charset: 'UTF-8',
                  Data: `Name: ${fullName}\r\nEmail: ${email}\r\nPhone: ${phone}\r\n\r\n-----\r\n\r\n${message}`
                },
              },
              Subject: {
                Charset: 'UTF-8',
                Data: `Contact Form Submission: ${fullName}`
              },
            },
            ReplyToAddresses: [email],
            Source: `${fullName} <no-reply@cendenta.com>`,
          };
        
          var response = await SES.sendEmail(sesParams).promise();
          res.status(200).json({ response });
    } else {
        res.status(400).json({ error: "validation failed" });
    }

};

export default handler;