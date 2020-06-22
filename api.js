const express = require('express');
const router = express.Router();

const todos = [
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

router.put('/update' , (req , res)=>{
  console.log(req.body);
});

router.delete('/remove' , (req , res)=>{

});




module.exports = router;
