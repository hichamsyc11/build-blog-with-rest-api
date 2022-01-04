const mongoose = require("mongoose")


// connect to database
mongoose.connect(process.env.DB_URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(' Database Connected Successful ')
})
.catch((error)=>{
    console.log(' Error When Connect To Database: ', error)
})

mongoose.connection.on('connected',()=>{
    console.log('Database Connected')
})

mongoose.connection.on('error',()=>{
    console.log(' Error When Connect To Database: ', error)
})

mongoose.connection.on('disconnected',()=>{
    console.log('Database Disconnected')
})

process.on('SIGINT',async ()=>{
    await mongoose.connection.close()
    process.exit(0)
})