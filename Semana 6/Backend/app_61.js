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
app.get('/dados', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM IC ORDER BY Users';
	db.all(sql, [], (err, rows) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/dadosinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO dados (UserID,Users) VALUES ('" + req.body.title + "', 33)";
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
app.post('/dadosupdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE dados SET Users = '" + req.body.title + "' WHERE userId = " + req.body.userId;
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
app.post('/dadosdelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM dados WHERE UserID = " + req.body.userId;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/dados', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin',
		'*');

	var db = new sqlite3.Database(DBPATH);
	var sql = 'SELECT * FROM dados WHERE UserID = 1';
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