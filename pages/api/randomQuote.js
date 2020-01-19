export default (req, res) => {
  res.status(200).json({
    quote: "Write testes, not too many, mostly integration",
    author: "Guilhermo Ruch"
  });
};
