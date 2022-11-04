const express=require('express')
const Router=express.Router()

const {addingNumber}=require('../controller/controllere')
Router.post('/add',addingNumber)
module.exports=Router