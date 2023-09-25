"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGrpcObj = exports.loaderOptions = exports.protoLoader = exports.grpc = void 0;
/* ------------------------------ Dependencies ------------------------------ */
exports.grpc = require('@grpc/grpc-js');
exports.protoLoader = require('@grpc/proto-loader');
/* ------------------------------ Node Modules ------------------------------ */
const node_path_1 = require("node:path");
/* -------------------------------- Constants ------------------------------- */
exports.loaderOptions = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true, // sets virtual oneof properties to field names
};
const AUTH_PROTO_PATH = (0, node_path_1.resolve)(__dirname, 'proto/auth.proto');
const authPackageDef = exports.protoLoader.loadSync(AUTH_PROTO_PATH, exports.loaderOptions);
exports.authGrpcObj = exports.grpc.loadPackageDefinition(authPackageDef);
