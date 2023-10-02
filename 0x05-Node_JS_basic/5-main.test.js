// eslint-disable-next-line import/no-extraneous-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('./5-http');

chai.use(chaiHttp);
chai.should();

describe('more complex HTTP server using node', () => {
  describe('/endpoint', () => {
    it('returns the right content', async () => {
      expect.assertions(2);
      const response = await chai.request(app).get('/');
      expect(response.text).toStrictEqual('Hello Holberton School!');
      expect(response.statusCode).toStrictEqual(200);
    });
  });
});
