const express = require('express');
const api = require('./api');
const app = express();
const PORT = 8000;
const __static_dir = './dist/todo-app/';

// serving static files
app.use('/' , express.static(__static_dir));
app.use('/api' , api);
app.use((req , res)=>{
    // Default route
    res.sendFile(__static_dir + 'index.html' , {root : '.'});
});

app.listen(PORT , () =>{
    console.log(`listening on http://localhost:${PORT}`);
});