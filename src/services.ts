/* ------------------------------ Dependencies ------------------------------ */
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'

/* -------------------------- Register Environment -------------------------- */
const env = dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
dotenvExpand.expand(env)

/* -------------------------------------------------------------------------- */
/*                                Service Name                                */
/* -------------------------------------------------------------------------- */
export enum ServiceName {
	DEFAULT,
	MAIN,
	BUSINESS,
	ASSET,
	GATEWAY,
	STAGING_BUSINESS,
}

/* -------------------------------------------------------------------------- */
/*                                  Base Url                                  */
/* -------------------------------------------------------------------------- */
// prettier-ignore
export const BaseUrl = {
  [ServiceName.DEFAULT]:			`${process.env.SERVER_ADDRESS}/api/v1`,
  [ServiceName.MAIN]:				`${process.env.MAIN_SERVER_ADDRESS}/api/v1`,
  [ServiceName.BUSINESS]:			`${process.env.BUSINESS_SERVER_ADDRESS}/api/v1`,
  [ServiceName.ASSET]:				`${process.env.ASSET_SERVER_ADDRESS}/api/v1`,
  [ServiceName.STAGING_BUSINESS]:	`${process.env.STAGING_BUSINESS_SERVER_ADDRESS}/api/v1`,
}
