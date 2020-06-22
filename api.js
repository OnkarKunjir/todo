const express = require('express');
const router = express.Router();

let todos = [
    {
      'id':'0',
      'title':'Finish frontend',
      'status':'Working'
    },
    {
      'id':'1',
      'title':'Finish backend',
      'status':'Yet to start'
    },
    {
      'id':'2',
      'title':'Make it secure',
      'status':'Yet to start'
    },
    {
      'id':'3',
      'title':'Make landing page mobile friendly',
      'status':'Yet to start'
    }
  ];

router.get('/featch' , (req , res)=>{
    res.json(todos);
});

router.post('/add' , (req , res)=>{
  todos.push(req.body);
  res.send();
});

router.put('/update' , (req , res)=>{
  let _todo = req.body;
  todos.forEach( t => {
    if(t.id == _todo.id){
      t.status = _todo.status;
      t.title = _todo.title;
    }
  });
  res.send(); 
});

router.delete('/remove/:id' , (req , res)=>{
  let _id = req.params.id;
  todos = todos.filter( t => t.id != _id );
  console.log(todos);
  res.send();
});

module.exports = router;