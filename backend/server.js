require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
const dbConnect=require("./connectionDB/ConnectionDB")
const routes=require("./routes/Routes")
const PORT = process.env.PORT || 8000;

dbConnect();

// middelware
app.use(express.json());

app.use(cors())

// reqiures routes
app.use(routes)

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is started on PORT ${PORT}`);
});