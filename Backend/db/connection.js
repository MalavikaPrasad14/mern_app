const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://malavika_prasad:12345@cluster0.yktvn.mongodb.net/mernEmployeeDB?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("Connection established");
}).catch(()=>{
    console.log("Error in connection");
})