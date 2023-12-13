const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'Минимальное количество символов - 2'],
    maxlength: [30, 'Максимальное количество символов - 30'],
    default: 'Жак-Ив Кусто',
    required: [true, 'Введите имя'],
  },
  about: {
    type: String,
    minlength: [2, 'Минимальное количество символов - 2'],
    maxlength: [30, 'Максимальное количество символов - 30'],
    default: 'Исследователь',
    required: [true, 'Напишите о себе'],
  },
  avatar: {
    type: String,
    validate: {
      validator: (url) => validator.isURL(url),
      message: 'Введен некорректный URL-адрес',
    },
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
  email: {
    type: String,
    required: [true, 'Введите адрес электронной почты'],
    unique: [true, 'Этот адрес уже используется, выберете другой'],
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Введен некорректный email-адрес',
    },
  },
  password: {
    type: String,
    requered: [true, 'Введите пароль'],
    select: false,
  },
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
