const homeRoutes = require("./home-routes.js");
const router = require("express").Router();

const apiRoutes = require("./api");
const dashboardRoutes = require("./dashb-routes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);

router.get("/login", (req, res) => {
  res.render("login");
});

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
