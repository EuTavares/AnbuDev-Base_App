const express = require('express');
const cors = require('cors'); 
const routes = require ('./routes');

const app = express();

//app.use(cors({
//    origin: 'http://meuapp.com' //caso fosse produção
// }));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/*
*Rota/ Recurso
*/
/*
*Metodos HTTP:
*GET: Buscar uma informação do back-end
*POST: Criar uma informação no back-end
*PUT: Alterar uma informação no back-end
*DELETE: Deletar uma informação no back-end
*/
/*
app.post('/users', (request, response) =>{
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Miguel Tavares'

    });
});
app.listen(3333);
*/

/*
*Tipos de Parâmetros:
*Query Params: Parâmetros nomeados enviados na rota apos "?" (Filtros e Paginação)
*Route Params: Parâmetros utilizados para identificar recursos
*Request Body: Corpo da requisiçãp, utilizado para criar ou alterar recurso
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc. 
 */

 /**
  *  Driver: SELECT * FROM user
  * Query Builder: table('users').select('*').where()
  */

