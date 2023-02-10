const nodemailer = require('nodemailer')

const triggerEmail = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const transporter = nodemailer.createTransport({
                host: 'smtppro.zoho.in',
                port: 465,
                auth: {
                    user: 'admin@takfabrication.com.au',
                    pass: 'NewP@ssw0rd@1245'
                }
            });
            var mailOptions = {
                from: 'admin@takfabrication.com.au',
                to: 'enquiry@takfabrication.com.au',
                subject: `Enquiry Request`,
                html: '<h1>This is test</h1>'
            };
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log(err)
                    res.json({
                        'status': 401,
                        'message': 'Somthing Went to Wrong..!'
                    })
                }
                else {
                    res.json({
                        'status': 200,
                        'message': 'Mail Triggered..!'
                    })
                }
            })
        } catch (error) {
            res.send({ 'message': 'Internal Server Error' })
        }
    } else {
        res.send('Work in progress...!')
    }
};

export default triggerEmail;