const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// This will use the public folder for static assets.
app.use(express.static("public"));

// Set up the Handlebars engine
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", "handlebars");

// Define routes and render templates

// MAIN.HANDLEBARS
app.get("/", (req, res) => {
  const data = {
    name: "John Doe",
    age: 30,
    // Add more data properties as needed
  };

  res.render("homepage", data);
});

// LOGIN.HANDLEBARS
app.get("/login", (req, res) => {
  // No specific data needed for login template
  res.render("login");
});

// PROFILE.HANDLEBARS
app.get("/profile", (req, res) => {
  const data = {
    name: "John Doe",
    occupation: "Developer",
    // Add more data properties as needed
  };

  res.render("profile", data);
});

// SIGNUP.HANDLEBARS
app.get("/signup", (req, res) => {
  res.render("signup");
});

// POST.HANDLEBARS
app.get("/post", (req, res) => {
  res.render("post");
});

// TIMELINE.HANDLEBARS
app.get("/timeline", (req, res) => {
  const data = {
    posts: [
      {
        id: 1,
        username: "john_doe",
        avatar: "/images/avatar1.jpg",
        image: "/images/post1.jpg",
        caption: "Beautiful sunset",
        likes: 100,
        comments: 20,
      },
      // Add more posts as needed
    ],
  };

  res.render("timeline", data);
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
