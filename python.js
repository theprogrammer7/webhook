const express = require('express')
const app = express()
let fs = require('fs')


app.get('/view/:data',(req,res)=>{
    var data = req.params.data;
    console.log(data)
   fs.appendFile('py.txt',data+"\n",(err)=>{
      if(err) throw err;
      res.end('data saved');
    })
   /* var logger = fs.createWriteStream('py.txt', {
        flags: 'a' // 'a' means appending (old data will be preserved)
      })
      
      logger.write(data + "\n") 
      
      res.end('saved')*/
})
app.get('/viewdata',function(req,res){
    fs.readFile('py.txt','utf8',(err,data)=>{
        if(err) throw err;
        res.end(data);
    })
})

app.listen(2020,console.log('start'))
