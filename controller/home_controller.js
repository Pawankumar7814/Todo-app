// Adding model 
// const express = require('express');
// const mongoose = require('mongoose');
const Task = require('../models/task');
const db = require('../config/mongoose');

module.exports.home = function(req, res) {
    return res.render('home', {
        title: "Home"
    });
}

module.exports.task = async function(req, res) {
    try {
        console.log(req.body);
        var tasks = await Task.create({
            task: req.body.desc,
            date: req.body.date
        });
        return res.redirect('back');
    } catch (err) {
        console.log(err);
    }
}