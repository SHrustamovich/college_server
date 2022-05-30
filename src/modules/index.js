const express = require('express')
const router = express.Router()

const Admin = require('./admins/admin')
const Network = require('./network_data/network_data')
const News = require('./News/news')
const Courses = require('./Courses/Courses')
const Order = require('./Order/Order')
const Birthday = require('./Birthday/Birthday')
const auth = require('../middlewares/auth')

router
  .post('/admin',Admin.ADMIN)
//   network_data
  .get('/network',Network.Network)
       // news
   .get('/news',News.GET)
   .post('/news',News.POST)
   .put('/updatenews',News.PUT)
   .put('/changedel',News.PUTchange)
   .delete('/delete',News.DELETE)
       // courses
   .get('/courses',Courses.GET)
   .get('/coursesfront',Courses.GETFRONT)
   .post('/createcourse',Courses.POST)
   .put('/updatecourse',Courses.PUT)
   .put('/changecourse',Courses.PUTchange)
   .delete('/deletecourse',Courses.DELETE)
       //  order
   .get('/order',Order.GET)
   .post('/createorder',Order.POST)
   .put('/updateorder',Order.PUT)
       //  birthday
    .get('/birthday',Birthday.GET)
    .get('/allbirthday',Birthday.GETALL)
    .post('/createbirthday',Birthday.POST)
    .put('/updatebirthday',Birthday.PUT)
    .put('/udelete',Birthday.PUTDEL)
  module.exports = router