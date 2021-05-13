// TODO: add authentication here
module.exports = {
  authorize: function(req, reply, done){
    console.log(`Ah, authorize ran here.`);
    done()
  }
}