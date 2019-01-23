require('dotenv').config();
var request = require('request');
const express = require('express');
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

exports.Home = function(req, res){
	res.render('website/index.ejs');
}

exports.localRadio = function(req, res){
	res.render('website/localradio.ejs');
}

exports.Recents = function(req, res){
	res.render('website/recents.ejs');
}

exports.Trending = function(req, res){
	res.render('website/trending.ejs');
}

exports.Sports = function(req, res){
	res.render('website/sports.ejs');
}

exports.Music = function(req, res){
	res.render('website/music.ejs');
}

exports.News = function(req, res){
	res.render('website/news.ejs');
}

exports.Talk = function(req, res){
	res.render('website/talk.ejs');
}

exports.Podcasts = function(req, res){
	res.render('website/podcasts.ejs');
}

exports.byLocation = function(req, res){
	res.render('website/bylocation.ejs');
}

exports.byLanguage = function(req, res){
	res.render('website/bylanguage.ejs');
}

exports.contactUs = function(req, res){
	res.render('website/contactus.ejs');
}

exports.aboutUs = function(req, res){
	res.render('website/aboutus.ejs');
}

exports.Terms = function(req, res){
	res.render('website/termsconditions.ejs');
}

exports.Privacy = function(req, res){
	res.render('website/privacy.ejs');
}


