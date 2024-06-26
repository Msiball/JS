import express from "express"; //// used to generate routes for routes that require authentication, basically use all the get, post and put methods
import bcrypt from "bcrypt"; //// used to encrypt the cx password
import flash from "express-flash"; ///express flash is used to display errors messages to the cx
import passport from "passport"; ///passport is used to connect through diff emails and social logins
import session from "express-session"; ///express session is used to store sessions data

const app = express();
const port = 3000;
const users = [];

//// used to register user, currently data is going into the array of users however we can use database like mongoDB to store this info
app.use(express.urlencoded({ extended: false }));
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch (e) {
    console.log(e);
    res.redirect("/register");
  }
});
///// end of how to register user

///routes to different pages
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

/// end of routes
app.listen(3000);
