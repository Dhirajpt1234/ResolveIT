require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/Auth");
const projectRouter = require("./routes/Project");
const complaintRouter = require("./routes/Complaint");



const server = express();

// middlewares
const corsConfig = {
    credentials: true,
    origin: true,
};
server.use(cors(corsConfig));
server.disable('x-powered-by');
server.use(cookieParser());

server.use(express.json());

server.use("/auth", authRouter.router);
server.use("/project", projectRouter.router);
server.use("/complaint", complaintRouter.router);

server.use(express.static("public"));


main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("database connected");
}

server.listen(process.env.PORT, () => {
  console.log("server started");
});
