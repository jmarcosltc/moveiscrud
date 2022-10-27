// Importar
import mysql from 'mysql2';
import express, { Request, Response, NextFunction, Express} from 'express';
// Importar o roteador do express
const router = express.Router();

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : '',
  password : ''
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
    const { nome, imagem, preco, ambiente } = req.body
    connection.query(
        'INSERT INTO `moveis` (nome, imagem, preco, ambiente) ' + `VALUES (${nome}, ${imagem}, ${preco}, ${ambiente})`,
        function(err, results, fields) {
          console.log(results); // reseultados
          console.log(fields); // não sei ainda
          return res.status(200).send()
        }
      );
})

// rota pra mostrar os moveis
router.get('/moveis', (req: Request, res: Response) => {
    // query para pegar todos os moveis
    connection.query(
        'SELECT * FROM `moveis`',
        function(err, results, fields) {
          console.log(results); // reseultados
          console.log(fields); // não sei ainda
          return res.status(200).send(results);
        }
      );
})

// rota pra editar um movel
router.put('/moveis:id', (req: Request, res: Response) => {
    // query para pegar todos os moveis
    const { nome, imagem, preco, ambiente } = req.body
    connection.query(
        'UPDATE `moveis` ' + 
        'SET `nome` = ' + `${nome} ` +
        '`imagem` = ' + `${imagem} ` +
        '`preco` = ' + `${preco} ` +
        '`ambiente` = ' + `${ambiente} ` +
        'WHERE `id` ' + `= ${req.params.id}`,
        function(err, results, fields) {
          console.log(results); // reseultados
          console.log(fields); // não sei ainda
          return res.status(200).send()
        }
      );
})

// rota pra remover um movel
router.delete('/moveis/:id', (req: Request, res: Response) => {
    // query para pegar todos os moveis
    connection.query(
        'DELETE FROM `moveis` ' +
        'WHERE `id` ' + `= ${req.params.id}`,
        function(err, results, fields) {
          console.log(results); // reseultados
          console.log(fields); // não sei ainda
          return res.status(200).send()
        }
      );
})

connection.end();

export default router