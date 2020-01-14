
const express=require('express')
require ('./db/mongoose')
const taskrouter=require('./routers/task_router')
const student_route=require('./routers/student_route')
const bodyparser=require('body-parser')
var app=express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(taskrouter)
app.use(student_route)

app.listen(3000);
