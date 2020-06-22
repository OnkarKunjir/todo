const express = require('express');
const api = require('./api');
const app = express();
const PORT = 8000;
const __static_dir = './dist/todo-app/';

// serving static files
app.use('/' , express.static(__static_dir));
app.use(express.json());
app.use('/api' , api);
app.use((req , res)=>{
    // Default route
    // res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    // res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // next();
    res.sendFile(__static_dir + 'index.html' , {root : '.'});
});



app.listen(PORT , () =>{
    console.log(`listening on http://localhost:${PORT}`);
});