const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use("/api", routes.apiRoutes);
app.use("/", routes.htmlRoutes);

app.listen(PORT, () => {
    console.log("MemeLodge Listening on " + PORT);
});
