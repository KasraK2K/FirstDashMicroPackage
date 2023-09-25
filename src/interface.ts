export interface IType {
	format: string
	type: {
		name: string
		extendee: string
		number: number
		label: string
		type: string
		typeName: string
		defaultValue: string
		options: null
		oneofIndex: number
		jsonName: string
	}[]
	fileDescriptorProtos: { type: string; data: Buffer }[]
}

export interface IRequestType extends IType {
	nestedType: []
	enumType: []
	extensionRange: []
	extension: []
	oneofDecl: []
	reservedRange: []
	reservedName: []
	name: string
	options: null
}

export interface IServiceType {
	path: string
	requestStream: boolean
	responseStream: boolean
	requestSerialize: Function
	requestDeserialize: Function
	responseSerialize: Function
	responseDeserialize: Function
	originalName: string
	requestType: IType
	responseType: IType
}

export interface IAuthService {
	service: {
		LoginPortalUser: IServiceType
		RegisterPortalUser: IServiceType
		serviceName: string
	}
	AuthRequest: IRequestType
	AuthResponse: IType
	PortalUser: IType
}

export interface IAuthGrpc {
	authentication: {
		Auth: ((...args: any[]) => IAuthService) & IAuthService
	}
}
