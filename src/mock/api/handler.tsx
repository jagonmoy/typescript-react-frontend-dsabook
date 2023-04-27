import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3000/api', (req, res, ctx) => {

    // successful response
    return res(ctx.status(200), ctx.json([
        { id: 1, name: 'Xabi Alonzo' },
        { id: 2, name: 'Lionel Messi' },
        { id: 3, name: 'Lionel Love' },
        { id: 4, name: 'Lionel Poe' },
        { id: 5, name: 'Lionel Gink' },
    ]), ctx.delay(30))
  })
]