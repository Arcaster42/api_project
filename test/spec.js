const mocha = require('mocha')
const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const server = require('../index')
const http = require('http')


describe('API Project', () => {
    describe('Server', () => {
        before(() => {
            
        })
        after(() => {
            server.app.close()
        })

        it('should return something', (done) => {
            http.get('http://localhost:3000/', (res) => {
                expect(res.statusCode).to.eql(200)
            })
        })
    })
    
    it('should exists', () => {
        expect(true).to.eql(true)
    })
})