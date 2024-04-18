require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/Admin");
const adminauthRoutes = require("./routes/AdminAuth");
const regis = require("./routes/Registration");
const contactRoutes=require("./routes/contacts")
const courseRoutes=require("./routes/Course")
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors({
    origin: 'https://anand-chess-academy-front-en-git-5c46af-saradharameshs-projects.vercel.app/'
  }));

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/adminauth",adminauthRoutes);
app.use("/api/contact",contactRoutes);
app.use("/api/register",regis);
app.use("/api/course",courseRoutes);
const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`)
});
