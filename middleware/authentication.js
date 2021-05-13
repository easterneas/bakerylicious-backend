module.exports = {
  authenticate: function(req, reply, done){
    console.log(`Ah, authenticate ran here.`);
    done()
  }
}