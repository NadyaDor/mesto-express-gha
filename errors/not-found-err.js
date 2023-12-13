// запрошенный ресурс не найден

class NotFoundErr extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

module.exports = NotFoundErr;
