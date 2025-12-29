function status(req, res) {
  res.status(200).json({ chave: "curso.dev api is running 'é nóis! 🚀" });
}

export default status;
