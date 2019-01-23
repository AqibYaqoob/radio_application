require('dotenv').config();
var request = require('request');
const express = require('express');
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');


exports.Login = function(req, res){
	res.render('website/Login.ejs');
}


exports.Login = function(res,req){
	res.render('website/login.ejs');

}

exports.Registration = function(res,req){
	res.render('website/Register.ejs');
	
}

exports.Forgotpassword = function(res,req){
	
}
