const router = require('express').Router();
const { getAllUsers, getOneUser, updateUser, updateAvatar, getCurrentUser } = require('../controllers/users');
const { celebrate, Joi } = require('celebrate');

router.get('/', getAllUsers);
router.get('/:userId', getOneUser);
router.get('/me', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().hex().length(24),
  }),
}), getCurrentUser);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateUser);
router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().regex(/https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/),
  }),
}), updateAvatar);

module.exports = router;
