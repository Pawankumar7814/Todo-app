const mongoose = require('mongoose');

const Task = require('../models/task');
const db = require('../config/mongoose');

module.exports.task = async function(req, res) {
    try {
        var Tasks = await Task.create({
            task: req.body.desc
        });
        console.log(Tasks);
        return res.redirect('back');
    } catch (err) {
        console.log(`Error while saving the task ${err}`);
        return;
    }
}