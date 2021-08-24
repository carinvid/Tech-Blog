const router = require("express").Router();

const userRoutes = require("./users-routes");
const homeRoutes = require("./home-routes.js");
const postRoutes = require("./post-routes");
const dashboardRoutes = require("./dashboard-routes.js");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/home", homeRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/dashboard", dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
