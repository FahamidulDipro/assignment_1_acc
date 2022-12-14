const { readFileSync } = require("fs");
let users = JSON.parse(readFileSync("./public/data.json"));

module.exports.getAllusers = (req, res, next) => {
  const { limit } = req.query;
  res.json(users.slice(0, limit));
};
module.exports.getRandomuser = (req, res, next) => {
  const randomUser = users[Math.floor(Math.random() * users.length)];
  res.json(randomUser);
};
module.exports.insertuser = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.send("Inserted!");
};

module.exports.updateuser = (req, res) => {
  // const newData = req.body;
  const { id } = req.params;
  const filter = { id: id };

  const newData = users.find((p) => p.id == id);
  newData.id = id;
  newData.name = req.body.name;
  newData.contact = req.body.contact;
  newData.address = req.body.address;
  newData.picture = req.body.picture;
  newData.gender = req.body.gender;
  res.send(newData);
};
module.exports.bulk_updateuser = (req, res) => {
  const { id } = req.query;
  console.log(id);
  id.forEach((i) => {
    const newData = users.find((u) => u.id == i);
      newData.name = req.body.name;
      newData.contact = req.body.contact;
      newData.address = req.body.address;
      newData.picture = req.body.picture;
      newData.gender = req.body.gender;
    
  });
 
  res.send(req.body);
};

module.exports.deleteuser = (req, res) => {
  const { id } = req.params;
  console.log(id);
  users = users.filter((p) => p.id != id);
  res.send(users);
};
