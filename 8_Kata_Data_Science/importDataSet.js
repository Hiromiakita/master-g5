const dotenv = require ('dotenv')
const mongoose = require('mongoose')
const csv = require('csv-parser')
const fs = require('fs')
const 
const results = [];

dotenv.config()

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@devf.owinl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    )
    .then(() => {console.log('Conectado a la base de datos')})
    .catch(()=>{console.log('Error al conectar a la base de datos')})

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
    })

    const newClientSession = {
        device_mac,
        branch_office : parseInt(branch_office)
    }

    .on('end', () => {
      console.log(results);
      // [
      //   { NAME: 'Daffy Duck', AGE: '24' },
      //   { NAME: 'Bugs Bunny', AGE: '22' }
      // ]
    });