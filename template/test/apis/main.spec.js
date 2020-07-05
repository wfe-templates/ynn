const app = require('../../src')
const request = require('supertest')

const BASE_API = global.baseUrl

describe('main', () => {
    beforeAll(async () => {
        await app.ready()
    })

    describe('init', () => {
        it('should init success', done => {
            request(app.listen()).get(`${BASE_API}/main`)
                .expect(200)
                .expect(res => {
                    expect(res.body.status).toBe(0)
                }).end(e => e ? done.fail(e) : done())
        })
    })
})
