const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let smurfs = [
  {
    id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    name:'Poppa Smurf',
    position:'Village Leader',
    nickname: 'Pops',
    description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
  },
  {
    id:"JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZ",
    name:'Smurfette',
    position:'Beautician',
    nickname: 'Smurfette',
    description: 'Smurfette\'s role in the village is that of any other smurf; chores, and helping out where she can, but for her specifically, she is often seen to be very active in organizing events.'
  },
  {
    id:"G4gRG9lIiwiaWF0IjoxNTE2MjM5MDIy",
    name:'Brainy Smurf',
    position:'Lab Assistant',
    nickname: 'Brainy',
    description: 'Brainy is the village intellectual who\'s not afraid to share his "wisdom" with his fellow Smurfs, even though it usually results in his being booted to the village limits or whacked in the head with a mallet.'
  }
];

server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});
let smurfId = smurfs.length;

server.post('/smurfs', (req, res) => {
  const { name, position, nickname, description } = req.body;
  const newSmurf = { name, position, nickname, description, id: smurfId };
  if (!name || !position || !nickname) {
    return sendUserError(
      'Name, position and nickname fields are required.',
      res
    );
  }
  const findSmurfByName = smurf => {
    return smurf.name === name;
  };
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      `${name} already exists in the smurf DB.`,
      res
    );
  }


  smurfs.push(newSmurf);
  smurfId++;
  res.json(smurfs);
});

server.put('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    res.json(smurfs);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
