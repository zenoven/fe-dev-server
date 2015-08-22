var should = require('should');
var DataSet = require('../libs/dataset');

describe('DataSet', function () {
	var ds;

	beforeEach(function () {
		ds = new DataSet('./test/data');
	});

	it('should have a path prop', function () {
		ds.path.should.equal('./test/data');
	});

	it('should return a empty object if file is not exist', function () {
		var data = ds.get('no-exist.js');
		data.should.be.a.Object();
		Object.keys(data).length.should.equal(0);
	});

	it('should return a json object for exist js object file', function () {
		var data = ds.get('js_obj.html');
		data.should.have.property('name');
		data.name.should.equal('joey');
	});

	it('should return a function for exist js function file', function () {
		var data = ds.get('js_func.html');
		data.should.be.a.Function();
	});

	it('should return a json object for json file', function () {
		var data = ds.get('obj.html');
		data.should.have.property('name');
		data.name.should.equal('joey');
	});
});