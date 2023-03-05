const mongoose= require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/issue_tracker');

const db = mongoose.connection;

db.on('error',function(err){
    console.log("error on connecting");
}); 

db.once('open',function(){
    console.log("sahi se connect ho gya ");
});
 module.exports=db;
