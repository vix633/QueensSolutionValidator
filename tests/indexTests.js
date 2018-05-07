const
	app = require('../app'),
	chai = require('chai'),
	chaiHttp = require('chai-http'),
	should = require('chai').should();

require('mocha');
chai.use(chaiHttp);

describe('Index Router tests',function () {
	it('CanTakeQueenDiagonallyOnLeft_WithTwoQneens_ReturnsTrue', function () {
		return chai.request(app)
			.post('/')
			.send({
					"Positions":[[1,1],[2,2]],
					"BoardScale": 4
				})
			.then((res)=>{
				res.body.RIPQueen.should.be.true
			})
	});

	it('CanTakeQueenDiagonallyOnRight_WithTwoQneens_ReturnsTrue', function () {
		return chai.request(app)
			.post('/')
			.send({
				"Positions":[[1,2],[2,1]],
				"BoardScale": 4
			})
			.then((res)=>{
				res.body.RIPQueen.should.be.true
			})
	});

	it('CanTakeQueenDiagonallyOnLeft_WithThreeQneens_ReturnsTrue', function () {
		return chai.request(app)
			.post('/')
			.send({
				"Positions":[[1,1],[2,2],[0,3]],
				"BoardScale": 4
			})
			.then((res)=>{
				res.body.RIPQueen.should.be.true
			})
	});

	it('CanTakeQueenDiagonallyOnRight_WithThreeQneens_ReturnsTrue', function () {
		return chai.request(app)
			.post('/')
			.send({
				"Positions":[[1,2],[2,1],[3,3]],
				"BoardScale": 4
			})
			.then((res)=>{
				res.body.RIPQueen.should.be.true
			})
	});

	it('CanTakeQueenDiagonallyOnLeft_WithThreeQneensAndSpaceBetweenAttackingQueens_ReturnsTrue', function () {
		return chai.request(app)
			.post('/')
			.send({
				"Positions":[[0,0], [2,1], [3,3]],
				"BoardScale": 4
			})
			.then((res)=>{
				res.body.RIPQueen.should.be.true
			})
	});

	it('CanTakeQueenVertically_WithTwoQueens_ReturnsTrue', function () {
		return chai.request(app)
			.post('/')
			.send({
				"Positions":[[1,1],[1,2]],
				"BoardScale": 4
			})
			.then((res)=>{
				res.body.RIPQueen.should.be.true
			})
	});

	it('CanTakeQueenVertically_WithTwoQueensWithSpaceBetweenAttackingQueens_ReturnsTrue', function () {
		return chai.request(app)
			.post('/')
			.send({
				"Positions":[[0,0],[0,3]],
				"BoardScale": 4
			})
			.then((res)=>{
				res.body.RIPQueen.should.be.true
			})
	});

	it('CanTakeQueenHorizontaly_WithTwoQueensWithSpaceBetweenAttackingQueens_ReturnsTrue', function () {
		return chai.request(app)
			.post('/')
			.send({
				"Positions":[[0,0],[1,0]],
				"BoardScale": 4
			})
			.then((res)=>{
				res.body.RIPQueen.should.be.true
			})
	})
});
