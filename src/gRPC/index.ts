/* ------------------------------ Dependencies ------------------------------ */
export const grpc = require('@grpc/grpc-js')
export const protoLoader = require('@grpc/proto-loader')

/* -------------------------------- Constants ------------------------------- */
export const loaderOptions = {
	keepCase: true, // instructs the protoLoader to maintain protobuf field names
	longs: String, // store the data types that represent long and enum values
	enums: String, // store the data types that represent long and enum values
	defaults: true, // when set to true, sets default values for output objects
	oneofs: true, // sets virtual oneof properties to field names
}

/* -------------------------------------------------------------------------- */
/*                                    Auth                                    */
/* -------------------------------------------------------------------------- */
export * from './auth'
export * from './auth/interface'
