const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';

const port = 3061;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'dbUser.db';

app.use(express.static("../Frontend/"));

app.use(express.json());


/* Definição dos endpoints */

/****** CRUD ******************************************************************/

// Retorna todos registros (é o R do CRUD - Read)
app.get('/userId', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM tbuser ORDER BY userId';
	db.all(sql, [], (err, rows) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/userIdinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO dados (userId, Id) VALUES ('" + req.body.title + "', req.body.title )";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/userIdupdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE tbUser SET userId = '" + req.body.title + "' WHERE userId = " + req.body.userId;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/userIddelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM tbuser WHERE userId = " + req.body.userId;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/userId', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin',
		'*');

	var db = new sqlite3.Database(DBPATH);
	var sql = 'SELECT * FROM tbuser WHERE UserID = 1';
	db.get(sql, [], (err, row) => {
		if (err) {
			throw err;
		}
		else console.log(sql);
		res.write('index');

	})
})

/* Inicia o servidor */
app.listen(port, hostname, () => {
	console.log(`BD server running at http://${hostname}:${port}/`);
});