const database = require('../models');

class PessoaController {
  static async lista(req, res) {
    try {
      const pessoas = await database.Pessoas.findAll()
      return res.status(200).json(pessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async listaPorId(req, res) {
    const { id } = req.params;
    try {
      const pessoa = await database.Pessoas.findOne( {
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaPessoa(req, res) {
    const novaPessoa = req.body;
    try {
        const criandoPessoa = await database.Pessoas.create(novaPessoa);
        return res.status(201).json(criandoPessoa);
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
