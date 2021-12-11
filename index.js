const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use('/api/', (_, res) => {
    res.json({data: 'API Data Served!'})
})

app.listen(port, () => {
    console.log(`Server is on port ${port}`)
})

//console.log("its alive!")
//console.log(__dirname)
//console.log(__filename)
//console.log(process.env.USER)
//console.log(process.env.APIKEY)
//console.log(process.env.PORT)
//console.log(process.env.DBPASS)