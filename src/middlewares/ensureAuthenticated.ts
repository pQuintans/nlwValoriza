import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import "dotenv/config"

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization
  
  if(!authToken) {
    return response.status(401).end()
  }

  const [, token] = authToken.split(" ")

  try {
    const { sub } = verify(token, process.env.TOKEN_SECRET_KEY) as IPayload

    request.user_id = sub;

    return next()
  } catch (err) {
    return response.status(401).end()
  }

}