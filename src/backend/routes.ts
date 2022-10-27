// Importar o mysql2
import mysql from 'mysql2';
import express, { Request, Response, NextFunction, Express} from 'express';
// Importar o router
const router = express.Router();

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dbuser',
  password : 's3kreee7'
});

connection.connect();

/* Exemplo de query simples
connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    function(err, results, fields) {
      console.log(results); // reseultados
      console.log(fields); // não sei ainda
    }
  );
*/

/*
id
nome
imagem
preço
ambiente
*/

// rota para criar um movel novo
router.post('/moveis', (req: Request, res: Response) => {
    // query para adicionar um móvel
})

// rota pra mostrar os moveis
router.get('/moveis', (req: Request, res: Response) => {
    // query para pegar todos os moveis
})

// rota pra editar um movel
router.put('/moveis:id', (req: Request, res: Response) => {
    // query para pegar todos os moveis
})

// rota pra remover um movel
router.delete('/moveis/:id', (req: Request, res: Response) => {
    // query para pegar todos os moveis
})

connection.end();

export default router