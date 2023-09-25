/* ------------------------------ Dependencies ------------------------------ */
export const grpc = require('@grpc/grpc-js')
export const protoLoader = require('@grpc/proto-loader')
/* ------------------------------ Node Modules ------------------------------ */
import { resolve } from 'node:path'
import { IAuthGrpc } from '.'
/* -------------------------------- Constants ------------------------------- */
export const loaderOptions = {
	keepCase: true, // instructs the protoLoader to maintain protobuf field names
	longs: String, // store the data types that represent long and enum values
	enums: String, // store the data types that represent long and enum values
	defaults: true, // when set to true, sets default values for output objects
	oneofs: true, // sets virtual oneof properties to field names
}

const AUTH_PROTO_PATH = resolve(__dirname, 'proto/auth.proto')
const authPackageDef = protoLoader.loadSync(AUTH_PROTO_PATH, loaderOptions)
export const authGrpcObj: IAuthGrpc = grpc.loadPackageDefinition(authPackageDef)
