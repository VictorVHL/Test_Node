const mongoose = require('mongoose');
const User = require('./user.shema');

module.exports.ceateUser = async (req, res) => {
    const user = await User.create({
        _id: mongoose.Types.ObjectId(),
        firstName: req.body.name,
        workEmail: req.body.workEmail,
        personalPhone: req.body.personalPhone,
        workPhone: req.body.workPhone,
        lastName: req.body.lastName,
        personalEmail: req.body.personalEmail,
        company: req.body.company,
        hourlyRate: req.body.hourlyRate,
        role: req.body.role
    })
    return res.status(200).json(user);
};

module.exports.getUser = async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users)
};

module.exports.updateUser = async (req, res) => {
    User.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) {
            res.json({
                error: err
            })
        }
    })
}

module.exports.deleteUser = async (req, res) => {
    User.deleteMany({ _id: req.body.id }, (err) => {
        if (err) {
            res.json({
                error: err
            })
        }
    });
}