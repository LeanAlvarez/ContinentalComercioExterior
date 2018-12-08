const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

require('dotenv').config()

const path = require('path')


const app = express()

// settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))


//rutas
app.use(require('./routes'))



// static files
app.use(express.static(path.join(__dirname, 'public')));




//conexion de mongoose y app


    
    app.listen(app.get('port'), () => {
        console.log('escuchando en puerto,', app.get('port') )
    })

