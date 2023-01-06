const express = require("express");
const app = express();
const format = require("date-format")

app.get("/", (req,res) => {
    res.status(200).send(`<p>I'm going to get succeed</p>`)
})

app.get("/v1/instagram", (req,res) => {
    const user = {
        username: "Avinash372",
        followers: 273,
        follows: 210,
        date: format.asString("dd:MM:yyyy", new Date())
    }
    res.status(200).json(user).send()
})

app.get("/v1/facebook", (req,res) => {
    const user = {
        username: "avinash37",
        followers: 120,
        follows: 23,
        date: format.asString("dd:MM:yyyy", new Date())
    }
    res.status(200).json(user).send()
})

app.get("/v1/:default", (req,res) => {
    
    res.status(200).json(req.params.default).send()
})

app.listen(4000, () => {
    console.log("listening To 4000...")
})