/* ------------------------------ Dependencies ------------------------------ */
import { resolve } from 'node:path'
/* ----------------------------- Custom Modules ----------------------------- */
import { grpc, loaderOptions, protoLoader } from '..'
import { IAuthGrpc } from './interface'
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 How To Use                                 */
/* -------------------------------------------------------------------------- */
// login({ email: 'Kassra_K2K@yahoo.com', password: '12345678' })
//   .then(console.log)
//   .catch(console.log)

// register({ email: 'Kadra_K2K@yahoo.com', password: '12345678' })
//     .then(console.log)
//     .catch(console.log)
/* -------------------------------------------------------------------------- */

/* -------------------------------- Constants ------------------------------- */
const PROTO_PATH = resolve(__dirname, '../proto/auth.proto')
const packageDef = protoLoader.loadSync(PROTO_PATH, loaderOptions)
export const authGrpcObj: IAuthGrpc = grpc.loadPackageDefinition(packageDef)
/* -------------------------------------------------------------------------- */

/* SECTION ------------------- Register Functions --------------------------- */
export const loginPortalUser = (args: { email: string; password: string }): Record<string, any> => {
	const client = new authGrpcObj.authentication.Auth(process.env.MAIN_SERVER_GRPC_ADDRESS, grpc.credentials.createInsecure())

	return new Promise((resolve, reject) => {
		client.loginPortalUser(args, (error, result) => (error ? reject(error) : resolve(result)))
	})
}

export const registerPortalUser = (args: { email: string; password: string }): Record<string, any> => {
	const client = new authGrpcObj.authentication.Auth(process.env.MAIN_SERVER_GRPC_ADDRESS, grpc.credentials.createInsecure())

	return new Promise((resolve, reject) => {
		client.registerPortalUser(args, (error, result) => (error ? reject(error) : resolve(result)))
	})
}
/* -------------------------------------------------------------------------- */
