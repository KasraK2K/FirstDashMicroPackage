"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUrl = exports.ServiceName = void 0;
/* ------------------------------ Dependencies ------------------------------ */
const dotenv_1 = __importDefault(require("dotenv"));
const dotenv_expand_1 = __importDefault(require("dotenv-expand"));
/* -------------------------- Register Environment -------------------------- */
const env = dotenv_1.default.config({ path: `.env.${process.env.NODE_ENV}` });
dotenv_expand_1.default.expand(env);
/* -------------------------------------------------------------------------- */
/*                                Service Name                                */
/* -------------------------------------------------------------------------- */
var ServiceName;
(function (ServiceName) {
    ServiceName[ServiceName["DEFAULT"] = 0] = "DEFAULT";
    ServiceName[ServiceName["MAIN"] = 1] = "MAIN";
    ServiceName[ServiceName["BUSINNESS"] = 2] = "BUSINNESS";
    ServiceName[ServiceName["ASSET"] = 3] = "ASSET";
    ServiceName[ServiceName["GATEWAY"] = 4] = "GATEWAY";
})(ServiceName || (exports.ServiceName = ServiceName = {}));
/* -------------------------------------------------------------------------- */
/*                                  Base Url                                  */
/* -------------------------------------------------------------------------- */
// prettier-ignore
exports.BaseUrl = {
    [ServiceName.DEFAULT]: `${process.env.SERVER_ADDRESS}/api/v1`,
    [ServiceName.MAIN]: `${process.env.MAIN_SERVER_ADDRESS}/api/v1`,
    [ServiceName.BUSINNESS]: `${process.env.BUSINESS_SERVER_ADDRESS}/api/v1`,
    [ServiceName.ASSET]: `${process.env.ASSET_SERVER_ADDRESS}/api/v1`,
};
