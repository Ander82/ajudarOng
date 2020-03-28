const express = require('express')

const cors = require('cors')

const routes = require('./routes')

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)
/**
 * GET: buscar/listar uma informação do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */

/**
 * Tipos de Parametros:
 * Query Params: parametros nomeados enviados na rota após "?"(Filtros, paginação)
 * Route Params: parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * banco de dados
 * SQL: MySQL, SQLite, PostgreSQL, oracle, microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */


app.listen(3333)