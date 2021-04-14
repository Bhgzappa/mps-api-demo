const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDb = require("./config/connectDb");
const mpsRoute = require("./routes/mpsRoute");
const usersRoute = require("./routes/usersRoute");

dotenv.config();

const app = express();

connectDb();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/mps", mpsRoute);
app.use("api/users", usersRoute);

app.get("/api/mps", (req, res) => {
  res.send("Welcome to my MPs api");
});

const PORT = 5000; //process.env.PORT;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
