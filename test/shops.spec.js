const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Shops GET testing', () => {

    it('GET all shops', () => {
        chai.request('http://localhost:3000')
            .get('/shops')
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.an("array");
            });
    });

    it('GET top five shops', () => {
        chai.request('http://localhost:3000')
            .get('/shops/topfive') 
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.an("array");
            });
    });

});