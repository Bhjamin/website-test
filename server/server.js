// IMPORT STATEMENTS
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sgMail = require('@sendgrid/mail')

// ENVIROMENT VARIABLES
const port = process.env.SERVER_PORT

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
sgMail.setApiKey(SENDGRID_API_KEY)

// MIDDLEWARE
const app = express()

app.use(express.json())
app.use(cors())

// REQUESTS
app.post('/api/contact', (req, res) => {

    const { firstName, lastName, email, phone, message } = req.body

    const msg = {
        to: 'benjamin@hancock1.com',
        // customerservice@alder.com
        from: 'Customer Service Request <tanner.sm@alder.com>',
        subject: 'Customer Service Request From Website',
        text: ` Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
             `
    }

    sgMail.send(msg)
        .then(() => {
            res.status(200).send('success')
        }, err => {
            console.log(err)
            res.status(500).send('failed')
        })

})


app.post('/api/recruiting', (req, res) => {

    const { name, email, phone, state } = req.body

    console.log(req.body)

    const msg = {
        to: 'benjamin@hancock1.com',
        // zac.wh@alder.com
        from: `${email}`,
        subject: "Submission from recruiting page",
        text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        State: ${state}`
    }

    sgMail.send(msg)
    .then(() => {
        res.status(200).send('success')
    }, err => {
        console.log(err)
        res.status(500).send('failed')
    })

})

// START SERVER
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})