const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://rig:1234@cluster0.ggvvriw.mongodb.net/BlogApp?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")

})
.catch((error)=>{
    console.log(error)
})