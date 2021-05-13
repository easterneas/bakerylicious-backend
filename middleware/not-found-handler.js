module.exports = (error, req, res) => {
    
  this.log.info('error handled here')

  const reqCache = []

  res.status(409).send({ ok: false })
}
