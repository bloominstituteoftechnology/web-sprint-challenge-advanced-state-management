import { rest } from 'msw';

let guests = [
  {
    id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    name:'Elliot Alderson',
    position:'Head of Product at E Corp',
    nickname: 'Mr Robot',
    description: 'Elliot is the Head of Product at E Corp. He has spent 11 years in the software industry and credits his success to his outstanding people skills.'
  },
  {
    id:"JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZ",
    name:'Donna Clark',
    position:'Senior VP of Engineering at Cardiff Electric',
    nickname: 'Matriarch of Mutiny',
    description: 'Donna wears many hats as investor, hardware engineer, software engineer, and executive. She is motivated by the desire to create the future.'
  }
];

const sendUserError = (msg, ctx, res) => {
  
  return res(
    ctx.status(422),
    ctx.json({ Error: msg })
  )
};

export const handlers = [
    rest.get('http://localhost:3333/guests', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(guests)
      )
    }),

    rest.post('http://localhost:3333/guests', (req, res, ctx) => {
      const { name, position, nickname, description } = req.body;
      const newGuest = { name, position, nickname, description, id: Date.now() };

      if (!name || !position || !nickname) {
        const resp = sendUserError(
          'Name, position and nickname fields are required.',
          ctx,
          res
        );
        return resp;
      }
      const findGuestByName = guest => {
        return guest.name === name;
      };
      if (guests.find(findGuestByName)) {
        const resp = sendUserError(
          `${name} already exists in the guest DB.`,
          ctx,
          res
        );
        return resp;
      }

      guests.push(newGuest);

      return res(
        ctx.status(200),
        ctx.json(guests)
      )
    }),

    rest.put('http://localhost:3333/guests/:id', (req, res, ctx) => {
      const { id } = req.params;
      const { name, age, height } = req.body;
      const findGuestById = guest => {
        return guest.id === id;
      };
      const foundGuest = guests.find(findGuestById);
      if (!foundGuest) {
        return sendUserError('No Guest found by that ID', res);
      } else {
        if (name) foundGuest.name = name;
        if (age) foundGuest.age = age;
        if (height) foundGuest.height = height;
        
        return res(
          ctx.status(200),
          ctx.json(guests)
        )
      }
    }),

    rest.delete('http://localhost:3333/guests/:id', (req, res, ctx) => {
      const { id } = req.params;
      const foundGuest = guests.find(guest => guest.id === id);
    
      if (foundGuest) {
        guests = guests.filter(guest => guest.id !== id);
        return res(
          ctx.status(200),
          ctx.json(guests)
        )
      } else {
        sendUserError('No guest by that ID exists in the DB', res);
      }
    })
]