describe('Plugin', function() {
  var plugin;

  beforeEach(function() {
    plugin = new Plugin({});
  });

  it('should be an object', function() {
    expect(plugin).to.be.ok;
  });

  it('should has #compile method', function() {
    expect(plugin.compile).to.be.an.instanceof(Function);
  });

  it('should compile and produce valid result', function(done) {
    var content  = 'width: <%= 3 * 20 %>px;';
    var expected = "width: 60px;"


    plugin.compile(content, 'template.eco', function(error, data) {
      expect(error).not.to.be.ok;
      expect(data).to.equal(expected)
      done();
    });
  });
});
