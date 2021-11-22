/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
// const { Country, conn } = require('../../src/db.js');
const { Activity, conn } = require("../../src/db.js");

const agent = session(app);
// const country = {
//   name: 'Argentina',
// };

// describe('Country routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Country.sync({ force: true })
//     .then(() => Country.create(country)));
//   describe('GET /countries', () => {
//     it('should get 200', () =>
//       agent.get('/countries').expect(200)
//     );
//   });
// });

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err)
    })
  )
  
  describe('GET /countries', () => {
    it('responds with 200', () => agent.get('/countries').expect(200));
    it('responds with an array of all countries', () =>
      agent.get('/countries').then((res) => {
        expect(res.body)
      }));
  });
  describe('GET /countries?name=`....`', () => {
    it('responds with 200', () => agent.get('/countries?name').expect(200));
  });
  describe('GET /countries/:idPais', () => {
    it('responds with 200', () => agent.get('/countries/:idPais').expect(200));
  });
})
