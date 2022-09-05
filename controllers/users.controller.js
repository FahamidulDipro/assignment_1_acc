let users =  [
  {
    "id": "63164796086945293b42180b",
    "gender": "male",
    "name": "Merritt Mcdonald",
    "contact": "+1 (973) 564-3115",
    "address": "604 McKibbin Street, Sanborn, South Carolina, 3671",
    "picture": "http://placehold.it/32x32"
  },
  {
    "id": "6316479669915bf5fed78a2a",
    "gender": "male",
    "name": "Penny Stanley",
    "contact": "+1 (800) 442-3966",
    "address": "431 Rapelye Street, Catharine, Arkansas, 9545",
    "picture": "http://placehold.it/32x32"
  },
  {
    "id": "63164796558df75fd8bb003c",
    "gender": "female",
    "name": "Beryl Bass",
    "contact": "+1 (916) 416-2301",
    "address": "119 Vanderveer Street, Boykin, Louisiana, 7798",
    "picture": "http://placehold.it/32x32"
  },
  {
    "id": "631647969e5951d8fdf74cbb",
    "gender": "female",
    "name": "Joyce Jackson",
    "contact": "+1 (890) 442-3186",
    "address": "149 Baycliff Terrace, Homeland, Maine, 4826",
    "picture": "http://placehold.it/32x32"
  },
  {
    "id": "63164796b1f71739bf12876e",
    "gender": "male",
    "name": "Holmes Wilkins",
    "contact": "+1 (886) 454-3355",
    "address": "381 Elmwood Avenue, Rushford, Federated States Of Micronesia, 4821",
    "picture": "http://placehold.it/32x32"
  },
  {
    "id": "6316479612abe29fdbba5c0e",
    "gender": "male",
    "name": "Alba Clarke",
    "contact": "+1 (937) 488-3238",
    "address": "432 Livonia Avenue, Madrid, Florida, 1103",
    "picture": "http://placehold.it/32x32"
  },
  {
    "id": "63164796b44044baf41cc25d",
    "gender": "female",
    "name": "Baird Thompson",
    "contact": "+1 (832) 489-3308",
    "address": "989 Beekman Place, Rivereno, New Mexico, 2009",
    "picture": "http://placehold.it/32x32"
  },
  {
    "id": "6316479650a14f8a6ef2806a",
    "gender": "male",
    "name": "Bush Goodman",
    "contact": "+1 (807) 561-3868",
    "address": "739 Verona Place, Lopezo, Hawaii, 948",
    "picture": "http://placehold.it/32x32"
  },
  {
    "id": "631647961c70a029dc03540e",
    "gender": "male",
    "name": "Snider Carson",
    "contact": "+1 (858) 561-2933",
    "address": "585 Varanda Place, Albrightsville, Ohio, 1819",
    "picture": "http://placehold.it/32x32"
  },
  {
    "id": "63164796d4f790fa4f6f9d89",
    "gender": "male",
    "name": "Lloyd Nunez",
    "contact": "+1 (905) 442-2194",
    "address": "442 Batchelder Street, Brandywine, Connecticut, 5732",
    "picture": "http://placehold.it/32x32"
  }
];

module.exports.getAllusers = (req, res, next) => {
  const { limit } = req.query;
  console.log(limit);
  res.json(users.slice(0, limit));
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
