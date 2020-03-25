var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

// router.get("/index", (req, res) => {
//   res.render("admin/venues");
// });

router.get("/sample", (req, res) => {
  res.render("admin/sample");
});
router.get("/enquiries", (req, res) => {
  res.render("admin/enquiries");
});
router.get("/referals", (req, res) => {
  res.render("admin/referals");
});
router.get("/venues", (req, res) => {
  res.render("admin/venues");
});
router.get("/main", (req, res) => {
  res.render("superadmin/main");
});
router.get("/vendors", (req, res) => {
  res.render("superadmin/vendors");
});
router.get("/venuerequests", (req, res) => {
  res.render("superadmin/venuerequests");
});
router.get("/venueslist", (req, res) => {
  res.render("superadmin/venueslist");
});
router.get("/referalrequests", (req, res) => {
  res.render("superadmin/referalrequests");
});
router.get("/bookingrequests", (req, res) => {
  res.render("superadmin/bookingrequests");
});

module.exports = router;
