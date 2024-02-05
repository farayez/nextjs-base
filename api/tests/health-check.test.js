const request = require('supertest');
const app = require('../api-server');

describe('GET /api/health-check', function () {
  it('responds with json', function (done) {
    request(app)
      .get('/api/health-check')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(done);
  });
});
