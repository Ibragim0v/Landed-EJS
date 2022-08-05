const fs = require("fs");
const path = require("path");

module.exports = {
  GET: (_, res) => {
    res.render("app.view.ejs");
  },
  POST: (req, res) => {
    const { email } = req.body;
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, "..", "models", "mail.model.json"))
    );

    data.push({
      id: data[data.length - 1]?.id + 1 || 1,
      email,
    });

    fs.writeFileSync(
      path.join(__dirname, "..", "models", "mail.model.json"),
      JSON.stringify(data, null, 4)
    );

    res.redirect("/");
  },
  EMAIL: (_, res) => {
    res.json(
      JSON.parse(
        fs.readFileSync(path.join(__dirname, "..", "models", "mail.model.json"))
      )
    );
  },
};
