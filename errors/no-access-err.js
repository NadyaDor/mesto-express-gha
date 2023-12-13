// запрет доступа

class NoAccessErr extends Error {
  constructor(message) {
    super(message);
    this.status = 403;
  }
}

module.exports = NoAccessErr;
