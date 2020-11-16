class HomeController {
  static paginaInicial(req, res) {
    res.send("Bem vindo a Home - NodeJS + Express");
  }

  static fazerAlgumaCoisa(req, res) {
    res.send("estou fazendo algo");
  }

  static enviarNome(req, res) {
    try {
      const { nome } = req.params;
      if (nome === undefined) res.send("Ninguem enviou nome");
      res.send(`${nome} -- enviei meu nome`);
    } catch (error) {
      res.send("Error");
    }
  }
}

module.exports = HomeController;
