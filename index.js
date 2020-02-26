const express=require('express')
const setUpDB = require('./config/database')
const router=require('./config/routes')
const cors=require('cors')
const {userRouter}=require('./App/controllers/UserController')

const port=3050
setUpDB()

const app=express()
app.use(express.json())
app.use(cors())
app.use('/',router)
app.use('/users',userRouter)

app.listen(port,function(){
    console.log('listening on port',port)
})  