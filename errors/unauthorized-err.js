// ошибка несанкционированного доступа

class UnauthorizedErr extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

module.exports = UnauthorizedErr;
