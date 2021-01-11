import { rest } from 'msw';

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

const sendUserError = (msg, ctx, res) => {
  
  return res(
    ctx.status(422),
    ctx.json({ Error: msg })
  )
};

export const handlers = [
    rest.get('http://localhost:3333/smurfs', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(smurfs)
      )
    }),

    rest.post('http://localhost:3333/smurfs', (req, res, ctx) => {
      // console.log(req.body);
      const { name, position, nickname, description } = req.body;
      const newSmurf = { name, position, nickname, description, id: Date.now() };

      if (!name || !position || !nickname) {
        const resp = sendUserError(
          'Name, position and nickname fields are required.',
          ctx,
          res
        );
        return resp;
      }
      const findSmurfByName = smurf => {
        return smurf.name === name;
      };
      if (smurfs.find(findSmurfByName)) {
        const resp = sendUserError(
          `${name} already exists in the smurf DB.`,
          ctx,
          res
        );
        return resp;
      }

      smurfs.push(newSmurf);

      return res(
        ctx.status(200),
        ctx.json(smurfs)
      )
    }),

    rest.put('http://localhost:3333/smurfs/:id', (req, res, ctx) => {
      const { id } = req.params;
      const { name, age, height } = req.body;
      const findSmurfById = smurf => {
        return smurf.id === id;
      };
      const foundSmurf = smurfs.find(findSmurfById);
      if (!foundSmurf) {
        return sendUserError('No Smurf found by that ID', res);
      } else {
        if (name) foundSmurf.name = name;
        if (age) foundSmurf.age = age;
        if (height) foundSmurf.height = height;
        
        return res(
          ctx.status(200),
          ctx.json(smurfs)
        )
      }
    }),

    rest.delete('http://localhost:3333/smurfs/:id', (req, res, ctx) => {
      const { id } = req.params;
      const foundSmurf = smurfs.find(smurf => smurf.id === id);
    
      if (foundSmurf) {
        smurfs = smurfs.filter(smurf => smurf.id !== id);
        return res(
          ctx.status(200),
          ctx.json(smurfs)
        )
      } else {
        sendUserError('No smurf by that ID exists in the smurf DB', res);
      }
    })
]