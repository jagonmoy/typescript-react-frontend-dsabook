import { rest } from 'msw'

let backendBaseUrl ;
if(process.env.REACT_APP_ENV === 'production') backendBaseUrl = process.env.REACT_APP_BACKEND_URL;
else backendBaseUrl = process.env.REACT_APP_BACKEND_TEST_URL;

export const handlers = [
  rest.get(`${backendBaseUrl}`, (req, res, ctx) => {

    // successful response
    return res(ctx.status(200), ctx.json([
        { id: 1, name: 'Xabi Alonzo' },
        { id: 2, name: 'Lionel Messi' },
        { id: 3, name: 'Lionel Love' },
        { id: 4, name: 'Lionel Poe' },
        { id: 5, name: 'Lionel Gink' },
    ]), ctx.delay(30))
  }),
  rest.get(`${backendBaseUrl}`, (req, res, ctx) => {

    // successful response
    return res(ctx.status(200), ctx.json([
        { id: 1, name: 'Xabi Alonzo' },
        { id: 2, name: 'Lionel Messi' },
        { id: 3, name: 'Lionel Love' },
        { id: 4, name: 'Lionel Poe' },
        { id: 5, name: 'Lionel Gink' },
    ]), ctx.delay(30))
  }),
  rest.get(`${backendBaseUrl}/blogs/123`, (req, res, ctx) => {

    // successful response
    return res(ctx.status(200), ctx.json([
        { id: 1, name: 'Xabi Alonzo' },
        { id: 2, name: 'Lionel Messi' },
        { id: 3, name: 'Lionel Love' },
        { id: 4, name: 'Lionel Poe' },
        { id: 5, name: 'Lionel Gink' },
    ]), ctx.delay(30))
  }),
  rest.post(`${backendBaseUrl}/auth/sign-in`, (req, res, ctx) => {

    // successful response
    return res(ctx.status(200), ctx.json([
        { id: 1, name: 'Xabi Alonzo' },
        { id: 2, name: 'Lionel Messi' },
        { id: 3, name: 'Lionel Love' },
        { id: 4, name: 'Lionel Poe' },
        { id: 5, name: 'Lionel Gink' },
    ]), ctx.delay(30))
  }),
  rest.post(`${backendBaseUrl}/auth/sign-up`, (req, res, ctx) => {

    // successful response
    return res(ctx.status(200), ctx.json([
        { id: 1, name: 'Xabi Alonzo' },
        { id: 2, name: 'Lionel Messi' },
        { id: 3, name: 'Lionel Love' },
        { id: 4, name: 'Lionel Poe' },
        { id: 5, name: 'Lionel Gink' },
    ]), ctx.delay(30))
  }),
]