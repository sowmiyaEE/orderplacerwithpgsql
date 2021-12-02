const express=require('express');
const {Pool} = require('pg');
const app=express();
const port=process.env.port || 3001;
app.listen(port,()=>{console.log(`listening on ${port}`);
});
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

//createnewuser

app.get('/api/createnewuser',(req,res)=> {

//console.log(req,req.query.uid,req.query.name,req.query.phone,req.query.age,req.query.password);
pool.query(`INSERT INTO users VALUES($1,$2,$3,$4,$5);`,
[req.query.uid,req.query.name,req.query.phone,req.query.age,req.query.password], 
(err, result) => {
    if (err) {
       
        

        res.send(`{"msg":"failed"}`);
    }
    else{
        
      res.send(`{"msg":"created"}`);
    }
});
});






//validate
app.get('/api/validate',(req,res)=> {
console.log(req.query.username,req.query.password);
pool.query(`SELECT uid FROM Users WHERE username=$1 AND password=$2;`,
[req.query.username,req.query.password], (err, result) => {
    if (err) {
        

res.send(`{"msg":"error"}`);
    }
    else{
       
res.send(result.rows);
    }
});

});



//products

app.get('/api/products',(req,res)=> {
console.log("ww",req.query.search);
pool.query(`SELECT * FROM products WHERE description like ${"'%"+req.query.search+"%'"}`, (err, result) => {
    if (err) {
       
var sw=[{src:"wer",rate:"230",description:"dsdkdjk djks dfsjk",pid:"333"},{src:"wer",rate:"230",description:"dsdkdjk djks dfsjk",pid:"323"}];
//res.send(`{"msg":${sw}}`);
res.send(sw);
    }
    else{
        console.log(result.rows);
res.send(result.rows);
    }
});

});
//orders

app.get('/api/orders',(req,res)=> {
//console.log("uid like'"+req.query.uid+"'");
pool.query(`SELECT * FROM Orders WHERE uid like ${"'"+req.query.uid+"'"};`, (err, result) => {
    if (err) {
    
var resj=[{uid:'3',pid:'3e',qty:'2'},{uid:'2',pid:'3ww',qty:'2'},{uid:'23',pid:'33',qty:'23'}];
res.send(resj);
    }
    else{
     
res.send(result.rows);
    }
});

});

//allorders

app.get('/api/allorders',(req,res)=> {

pool.query(`SELECT * FROM Orders;`, (err, result) => {
    if (err) {
        console.log("Error - Failed to select all from orders");
        console.log(err);
var resj=[{uid:'3',pid:'3e',qty:'2'},{uid:'2',pid:'3ww',qty:'2'},{uid:'23',pid:'33',qty:'23'}];
res.send(resj);
    }
    else{
        console.log(result.rows);
res.send(result.rows);
    }
});

});

//addproduct

app.get('/api/addproduct',(req,res)=> {
console.log('addingprodduct',req.query.src);
pool.query(`INSERT INTO products VALUES($1,$2,$3,$4);`,
[req.query.id,req.query.src,req.query.rate,req.query.description], 
(err, result) => {
    if (err) {
        console.log("Error - Failed to insert values to products");
        console.log(err);
res.send(`{"msg":"Error"}`);
    }
    else{
         console.log("Success-insert values to products");
        console.log(result);
res.send(`{"msg":"Success-insert values to products"}`);
    }
});
});


//addorder

app.get('/api/addorder',(req,res)=>{
pool.query(`INSERT INTO orders VALUES($1,$2,$3);`,
[req.query.uid,req.query.pid,req.query.qty],
(err,result)=>{
if(err){ 
console.log("Error - Failed to insert values to orders");     
res.send(`{"msg":"Error"}`);
}else{console.log("inserted into user");
res.send(`{"msg":"successfully added new user"}`);
}
});

});