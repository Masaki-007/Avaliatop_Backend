import express from 'express';
import{
    obterRespostas,
    criarResposta,
    atualizarResposta,
    excluirResposta
  } from '../controllers/respostasController';
import isAuthenticated from '../middlewares/isAuthenticated';

const RespostasRoutes = express.Router();

// Rota GET para obter todas as respostas
RespostasRoutes.get('/respostas', isAuthenticated, obterRespostas);

// Rota POST para criar uma nova resposta
RespostasRoutes.post('/respostas', isAuthenticated, criarResposta);

// Rota PUT para atualizar uma resposta existente
RespostasRoutes.put('/respostas/:id', isAuthenticated, atualizarResposta);

// Rota DELETE para excluir uma resposta existente
RespostasRoutes.delete('/respostas/:id', isAuthenticated, excluirResposta);

export default RespostasRoutes;

