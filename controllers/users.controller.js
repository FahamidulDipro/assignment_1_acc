const {readFileSync}= require("fs");
let users = JSON.parse(readFileSync('./public/data.json'));
 
 
module.exports.getAllusers = (req, res, next) => {
  const { limit } = req.query;
 
  res.json(users.slice(0, limit));
};
module.exports.getRandomuser = (req, res, next) => {
  const randomUser = users[Math.floor(Math.random()*users.length)];

 
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
  res.send(newData);
};

module.exports.deleteuser = (req, res) => {
  const { id } = req.params;
  users = users.filter((p) => p.id != id);
  res.send(users);
};
