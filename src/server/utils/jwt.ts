import jwt, { SignOptions } from 'jsonwebtoken'
import customConfig from '../config/default'

export const signJwt = (
	payload: Object,
	key: 'accessTokenPrivateKey' | 'refreshTokenPrivateKey',
	options: SignOptions = {},
) => {
	const privateKey = Buffer.from(customConfig[key], 'base64').toString('ascii')
	
	console.log({ key, payload, privateKey: customConfig[key] })
	const signed = jwt.sign(payload, privateKey, {
		...options,
		algorithm: 'RS256',
	})
	console.log({ signed })
	return signed
}

export const verifyJwt = <T>(
	token: string,
	key: 'accessTokenPublicKey' | 'refreshTokenPublicKey',
): T | null => {
	try {
		const publicKey = Buffer.from(customConfig[key], 'base64').toString('ascii')
		console.log({ key, token, publicKey })
		
		return jwt.verify(token, publicKey) as T
	} catch (error) {
		return null
	}
}
