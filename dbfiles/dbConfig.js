require('dotenv').config();

const config = {
    server: process.env.DB_SERVER,
    port: parseInt(process.env.DB_PORT, 10),
    instanceName: process.env.DB_INSTANCE,
    useUTC: process.env.DB_USE_UTC === 'true',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    options: {
        trustServerCertificate: process.env.DB_TRUST_CERTIFICATE === 'true',
        trustConnection: process.env.DB_TRUST_CONNECTION === 'true',
        enableArithAbort: process.env.DB_ENABLE_ARITH_ABORT === 'true',
    }
};

module.exports = config;
