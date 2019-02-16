module.exports = {
  port: 8081,
  db: {
    database: 'poomdb',
    user: 'root',
    password: '',
    options: {
      dialect: 'sqlite',
      host: 'localhost',
      storage: './poomdb.sqlite'
    }
  }
}