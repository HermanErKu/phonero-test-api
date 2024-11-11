const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});



// status get endpoint
app.get("/status", (req, res, next) => {
    res.json({ "status": "running" });
});
