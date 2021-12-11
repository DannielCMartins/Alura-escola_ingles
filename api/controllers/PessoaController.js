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

  static async atualizarPessoa(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;

    try {
      await database.Pessoas.update(novasInfos, { where : { id: Number(id) }});
      const infosAtualizadas = await database.Pessoas.findOne({ where : { id: Number ( id ) } })
      return res.status(200).json(infosAtualizadas);
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }

  static async deletaPessoa(req, res){
    const { id } = req.params;

    try {
        const apagarRegistro = await database.Pessoas.destroy({ where : { id: Number(id) } });
        return res.status(200).json({mensagem: `Registro apagado com sucesso`});
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }

  static async restauraPessoa(req, res) {
    const { id } = req.params
    try {
      await database.Pessoas.restore( {where: { id: Number(id) } } )
      return res.status(200).json({ mensagem: `id ${id} restaurado`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  /*******************************Matriculas *********************************/

  static async listaUmaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      const umaMatricula = await database.Matriculas.findOne( { 
        where: { 
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).json(umaMatricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaMatricula(req, res) {
    const { estudanteId } = req.params
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
    try {
      const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
      return res.status(200).json(novaMatriculaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    const novasInfos = req.body
    try {
      await database.Matriculas.update(novasInfos, { 
        where: { 
          id: Number(matriculaId),
          estudante_id: Number(estudanteId) 
        }})
      const MatriculaAtualizada = await database.Matriculas.findOne( { where: { id: Number(matriculaId) }})
      return res.status(200).json(MatriculaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.destroy({ where: { id: Number(matriculaId) }})
      return res.status(200).json({ mensagem: `id ${matriculaId} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restauraMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await database.Matriculas.restore({
        where: { 
          id: Number(matriculaId), 
          estudante_id: Number(estudanteId)
        } 
      })
      return res.status(200).json({ mensagem: `id ${matriculaId} restaurado`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PessoaController;
