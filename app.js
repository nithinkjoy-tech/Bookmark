const express = require("express")
const app = express()
const expressLayout = require("express-ejs-layouts");


require("./config/db");
app.use(expressLayout)
app.set("view engine", "ejs")
app.use(
    express.urlencoded({
        extended: false,
    })
);
const addtag = require("./routes/addtag");
const bookmarks = require("./routes/bookmarks");
const deletebookmark = require("./routes/deletebookmark");
const deletetag = require("./routes/deletetag");
const removetag = require("./routes/removetag");
const select = require("./routes/select");
const tags = require("./routes/tags");
const viewbookmarks = require("./routes/viewbookmarks");
const viewtags = require("./routes/viewtags");

app.use("/addtag", addtag);
app.use("/bookmarks", bookmarks);
app.use("/deletebookmark", deletebookmark);
app.use("/deletetag", deletetag);
app.use("/removetag", removetag);
app.use("/select", select);
app.use("/tags", tags);
app.use("/viewbookmarks", viewbookmarks);
app.use("/viewtags", viewtags);


app.get("/", (req, res) => {
    res.render("home")
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));