const express = require("express");
const db = require("./models");
const PORT = process.env.PORT || 3000;
const app = express();
const routes = require("./routes");
const controllers = require("./controllers");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use("/api/users", controllers.users);
app.use("/api/posts", controllers.posts);
app.use("/", routes.htmlRoutes);

db.sequelize.sync().then(function() {
    app.listen(PORT, () => {
        console.log("MemeLodge Listening on " + PORT);
    });    
});
