const database = require('../models');
const Sequelize = require('sequelize');

class PessoaController {
  static async listaAtivos(req, res) {
    try {
      const pessoasAtivas = await database.Pessoas.findAll()
      return res.status(200).json(pessoasAtivas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async lista(req, res) {
    try {
      const pessoas = await database.Pessoas.scope('todas').findAll()
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

  static async pegaMatricula(req, res) {
    const { estudanteId } = req.params
    try {
      const pessoa = await database.Pessoas.findOne({ where: { id: Number(estudanteId)}});
      const matricula = await pessoa.getAulasMatriculadas()
      return res.status(200).json(matricula)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaMatriculaPorId(req, res) {
    const { turmaId } = req.params
    try {
      const todasAasMatriculas =  await database.Matriculas.findAndCountAll({
        where: {
          turma_id: Number(turmaId),
          status: 'confirmado'
        },
        limit: 10,
        order: [['estudante_id', 'ASC']]
      })
      return res.status(200).json(todasAasMatriculas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async turmaLotada(req, res) {
    const limitTurma = 2;
    try {
      const turmas =  await database.Matriculas.findAndCountAll({
        where: {
          status: 'confirmado'
        },
        attributes: ['turma_id'],
        group: ['turma_id'],
        having: Sequelize.literal(`count (turma_id) >= ${limitTurma}`)
      })
      return res.status(200).json(turmas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PessoaController;
