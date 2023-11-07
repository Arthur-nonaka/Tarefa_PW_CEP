const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "banco",
  password: "batata",
});

function insertClient(name,email,cep) {
  connection.query(
    `INSERT INTO clientes
          (nome,email,CEP) 
          VALUES
            ("${name}","${email}","${cep}")`,
    (err, res, fields) => {
      if(err) { 
        console.log(err);
      }
    }
  );
  return "sucesso";

};

module.exports = {insertClient};
