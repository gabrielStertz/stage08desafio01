const { verify } = require("jsonwebtoken");
const AppError = require("../utils/appError");
const authConfig = require("../configs/auth");

const error = new AppError();

function ensureAuthenticated(request, response, next){
  const authHeader = request.headers.authorization;

  if(!authHeader){
    error.message = "JWT token não informado";
    error.statusCode = 401;
    throw error;
  };

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret);

    request.user = {
      id: Number(user_id)
    }

    return next();
  } catch {
    error.message = "JWT token inválido";
    error.statusCode = 401;
    throw error;
  };
};

module.exports = ensureAuthenticated;