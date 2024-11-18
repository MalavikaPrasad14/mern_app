const mongoose= require('mongoose');

const eSchema=   mongoose.Schema({
    empId: String,
    empName: String,
    empDesignation: String,
    empDepartment: String,
    empLocation: String,
    empSalary: Number

});

const employee=mongoose.model('empdetail',eSchema);


module.exports=employee;