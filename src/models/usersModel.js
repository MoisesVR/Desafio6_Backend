const pool = require("../db/db").pool;
const bcrypt = require("bcryptjs");

const getUserVerify = async (email) => {
    const consult = "SELECT * FROM usuarios WHERE email = $1";
    const values = [email];
    const result = await pool.query(consult, values);
    const rowCount = result.rowCount;

    if (!rowCount) {
        throw {
            code: 404,
            message: "No se encontró ningún usuario con estas credenciales",
        };
    }
    return result.rows;
}

const getUser = async (email, password) => {
    const consult = "SELECT * FROM usuarios WHERE email = $1";
    const values = [email];
    const result = await pool.query(consult, values);
    const rowCount = result.rowCount;


    if (!rowCount) {
        throw {
            code: 404,
            message: "No se encontró ningún usuario con estas credenciales",
        };
    }
    return result.rows;
};

const createUser = async (email, password, rol, lenguage) => {
    const passwordEncrypted = bcrypt.hashSync(password);
    const consult = "INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [email, passwordEncrypted, rol, lenguage];
    const result = await pool.query(consult, values);
    const rowCount = result.rowCount;

    if (!rowCount)
        throw {
            code: 404,
            message: "No se pudo crear el usuario",
        };
    return result.rows;
};

module.exports = { getUser, createUser, getUserVerify}