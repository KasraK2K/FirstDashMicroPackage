import { IRequestType, IServiceType, IType } from '../interface'

export interface IAuthServiceObject {
	LoginPortalUser: IServiceType
	RegisterPortalUser: IServiceType
	serviceName: string
}

// Because of we have added service with this names
export interface IAuthServiceInstance {
	loginPortalUser: (args: { email: string; password: string }, callback: (...args: any[]) => any) => Promise<any>
	registerPortalUser: (args: { email: string; password: string }, callback: (...args: any[]) => any) => Promise<any>
}

export interface IAuthService {
	service: IAuthServiceObject
	AuthRequest: IRequestType
	AuthResponse: IType
	PortalUser: IType
}

export interface IAuthGrpc {
	authentication: {
		Auth: (new (...args: any[]) => IAuthServiceInstance) & IAuthService
	}
}
