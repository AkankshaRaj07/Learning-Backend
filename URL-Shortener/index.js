const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { connectMongoose } = require("./connection");
const{restrictToLoggedinUserOnly,checkAuth} = require("./middlewares/auth");
const URL = require("./models/url");

const urlRoute = require("./routes/url");
const staticRoute = require('./routes/staticRoutes');
const userRoute = require("./routes/user");

const PORT = 8001;
const app = express();

connectMongoose('mongodb://127.0.0.1:27017/short-url').then(() => console.log("MongoDb Connected."));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());  // <-- add ()


app.use("/url",restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth,staticRoute);


app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId,
    },
        {
            $push: {
                visitHistory: {
                    timestamps: Date.now(),
                },
            },
        });
    res.redirect(entry.redirectURL);
})

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}.`));