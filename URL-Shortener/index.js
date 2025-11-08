const express = require("express");
const { connectMongoose } = require("./connection");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const PORT = 8001;
const app = express();
app.use(express.json());
connectMongoose('mongodb://127.0.0.1:27017/short-url').then(() => console.log("MongoDb Connected."));

app.use("/url", urlRoute);
app.get('/:shortId', async (req, res) => {
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