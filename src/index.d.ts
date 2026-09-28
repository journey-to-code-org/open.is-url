export interface IsUrlOptions{protocols?:string[];allowRelative?:boolean;requireHostname?:boolean;}
export function isUrl(value:unknown,options?:IsUrlOptions):boolean;

