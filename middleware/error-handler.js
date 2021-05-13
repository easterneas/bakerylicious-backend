// TODO - improve global error handler
module.exports = (error, req, res) => {
  console.log(error);
  const { message } = error
  res.status(400).send(message)
}
