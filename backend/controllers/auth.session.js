const bcrypt = require('bcryptjs');

const db = require("../models");
const User = db.user;

exports.login = (req, res) => {
  if (req.session.user) {
    return res.redirect("/motorbikes");
  }
  res.render("login");
}

exports.signin = (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.render("error", {
      message: "Username or Password required."
    });
  }

  const user = req.body.username;
  const pwd = req.body.password;

  User.findOne({ where: { username: user } })
    .then(data => {
      if (!data) return res.render("error", { message: "User not found!" });

      const result = bcrypt.compareSync(pwd, data.password);
      if (!result) return res.render("error", {
        message: "Password not valid!."
      });

      req.session.user = {
        username: data.username,
        id: data.id 
      };

      return res.redirect("/motorbikes");
    })
    .catch(err => {
      return res.render("error", {
        message:
          err.message || "Some error occurred while retrieving motorbikes."
      });
    });
};

exports.isAuthenticated = (req, res, next) => {

  if (!req.session.user) {
    return res.redirect("/users/login");
  }

  next();
};

// Logout
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.redirect('/motorbikes');
    }
    
    // To clear the cookie even if you set the maxAge parameter.
    res.clearCookie('connect.sid'); // Explicitly clear the session cookie

    res.redirect('/users/login');
  });
};
