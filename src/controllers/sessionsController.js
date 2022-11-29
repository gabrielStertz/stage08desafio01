const knex = require("../database/knex");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const AppError = require("../utils/appError");
const authConfig = require("../configs/auth");

class SessionsController {
  async create(request, response){
    const { email, password } = request.body;

    const user = await knex("users").where({email}).first();

    if(!user){
      const error = new AppError();
      error.message = "Email e/ou senha incorreta"
      error.statusCode = 401;
      throw error;
    };

    const passwordMatched = await compare(password, user.password);

    if(!passwordMatched){
      const error = new AppError();
      error.message = "Email e/ou senha incorreta"
      error.statusCode = 401;
      throw error;
    };

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    });

    return response.json({ user, token });
  };
};

module.exports = SessionsController;