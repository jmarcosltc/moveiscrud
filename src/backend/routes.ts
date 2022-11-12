// Importar
import mysql from 'mysql2';
import express, { Request, Response } from 'express';
// Importar o roteador do express
const router = express.Router();

const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'admin',
  port: 3308,
  database: 'moveis'
});

router.get('/health'), (req: Request, res: Response) => {
  res.send('Connection online.')
}

// rota para criar um movel novo
router.post('/moveis', (req: Request, res: Response) => {
    // query para adicionar um móvel
    const { nome, imagem, preco, ambiente } = req.body
    console.log(nome, imagem, preco, ambiente)
    connection.connect();
    connection.query(
        'INSERT INTO `moveis` (nome, imagem, preco, ambiente) ' + `VALUES ('${nome}', '${imagem}', ${preco}, '${ambiente}')`,
        function(err, results) {
          console.log(err)
          return results
        }
      );
    return res.status(200).send()
})

// rota pra mostrar os moveis
router.get('/moveis', (req: Request, res: Response) => {
    // query para pegar todos os moveis
    connection.connect();
    var resultado: any;
    if(req.query.id == undefined) {
      resultado = connection.query(
          'SELECT * FROM `moveis`',
          function(err, results) {
            //console.log(err); // erros
            return res.status(200).send(results);
          }
        );
    } else {
      resultado = connection.query(
        'SELECT * FROM `moveis` where id = ?', [req.query.id],
        function(err, results) {
          //.log(err); // erros
          return res.status(200).send(results);
        }
      );
    }
})

// rota pra editar um movel
router.put('/moveis/', (req: Request, res: Response) => {
    // query para pegar todos os moveis
    const { nome, imagem, preco, ambiente } = req.body
    connection.connect();
    connection.query(
        'UPDATE `moveis` ' + 
        'SET nome = ' + `'${nome}', ` +
        'imagem = ' + `'${imagem}', ` +
        'preco = ' + `${preco}, ` +
        'ambiente = ' + `'${ambiente}' ` +
        'WHERE `id` ' + `= ${req.query.id}`,
        function(err) {
          console.log(err); // reseultados
        }
        );
    return res.status(200).send()
})

// rota pra remover um movel
router.delete('/moveis', (req: Request, res: Response) => {
    // query para pegar todos os moveis
    connection.connect();
    connection.query(
        'DELETE FROM `moveis` ' +
        'WHERE `id` ' + `= '${req.query.id}'`,
        function(err) {
          console.log(err); // reseultados
        }
        );
    return res.status(200).send()
})


export default router