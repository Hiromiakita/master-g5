const dotenv = require ('dotenv')
const mongoose = require('mongoose')
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

dotenv.config()

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@devf.owinl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    )
    .then(() => {console.log('Conectado a la base de datos')})
    .catch(()=>{console.log('Error al conectar a la base de datos')})

    const ClientSession = require('./ClientSession')

    fs.createReadStream('e.csv')
    .pipe(csv())
    .on('data', (data) => {
        const {
            device_mac,
            branch_office,
            month_tz,
            day_tz,
            day_of_week_tz,
            hour_tz,
            visitor,
            tiempodeses
        } = data

        const day = parseInt(day_tz)
        const dayString = day > 9 ? `${day}` : `0${day}`
        const hour = parseInt(hour_tz)
        const hourString = hour > 9 ? `${hour}` : `0${hour}`

        const newClientSession = {
            device_mac,
            branch_office : parseInt(branch_office),
            month_tz: parseInt(month_tz),
            day_tz: day,
            day_of_week_tz,
            hour_tz: hour,
            is_visitor:  visitor === "true",
            session_duration: parseInt(tiempodeses),
            date_tz: new Date(`2016-${month_tz}-${dayString}T${hourString}:00:00Z`)
        }

        results.push(newClientSession)
    })

    

    .on('end', async () => {
    for (let index = 0; index < results.length; index++) {
            console.log(`Register #${index} inserted`)
        await ClientSession.create(results[index])    
    }
    });