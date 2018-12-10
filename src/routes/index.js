const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const router = express.Router()





router.get('/', (req, res) => {
    res.render('index', {
        title: 'Continental | Home'
    })
} )


router.get('/exito', (req, res) => {
    res.render('exito', {
        title: 'Continental | Gracias!'
    })
})
router.get('/fail', (req, res) => {
    res.render('fail', {
        title: 'Continental | Error :('
    })
} )

router.get('/politicas', (req, res) => {
    res.render('politicas', {
        title: 'Continental | Politicas'
    })
})

router.get('/contacto', (req, res) => {
    res.render('contacto', {
        title: 'Continental | Contacto'
    })
})

router.post('/contacto/formulario', (req, res, next) => {
  console.log(req.body)
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.MAIL_U,
          pass: process.env.MAIL_P
      }
  })
    let mailOptions = {
        from: 'Nombre:'+ req.body.nombre+' Mail: '+req.body.mail,
        to: process.env.MAIL_U,
        subject: 'Formulario de contacto - Continental COMEX',
        text: 'Formulario de contacto de Continental COMEX, Nombre: '+req.body.nombre+' Email: '+req.body.email+' Mensaje: '+req.body.mensaje,
        html: '<p>Se ha enviado un mensaje desde el formulario de contacto</p><ul><li>Nombre: '+req.body.nombre+'</li><li>Email: '+ req.body.email+'</li><li>Mensaje:'+req.body.mensaje+'</li></ul>'
    }
    transporter.sendMail(mailOptions,(err, info) => {
        if(!err){
            res.redirect('/exito')
            console.log('Mensaje Enviado '+info)
        }else{
            res.redirect('/fail')
            console.log(err)
        }
    })
})


module.exports = router