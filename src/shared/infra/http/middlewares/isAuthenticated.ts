import AppError from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { Secret, verify } from 'jsonwebtoken'
import authConfig from '@config/auth'

interface ITokenPayload {
  iat: number
  exp: number
  sub: string
}

function isAuthenticated(request: Request, response: Response, next: NextFunction): void {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT Token is missing.')
  }

  const [, token] = authHeader.split(' ')

  try {
    const decodedToken = verify(token, authConfig.jwt.secret as Secret)

    const { sub } = decodedToken as ITokenPayload

    request.user = {
      id: sub,
    }

    return next()
  } catch {
    throw new AppError('Invalid JWT Token')
  }
}

export default isAuthenticated