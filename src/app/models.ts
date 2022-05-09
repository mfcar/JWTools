export interface JwtAnatomy {
    has_iss: boolean;   //Issuer
    has_sub: boolean;   //Subject
    has_aud: boolean;   //Audience
    has_exp: boolean;   //Expiration Time
    has_nbf: boolean;   //Not Before
    has_iat: boolean;   //Issued At
    has_jti: boolean;   //JWT ID
    has_typ: boolean;   //Token Type
    has_cty: boolean;   //Content Type
    has_alg: boolean;   //Message authentication code algorithm
    has_kid: boolean;   //Key ID
    has_x5c: boolean;   //x.509 Certificate Chain
    has_x5u: boolean;   //x.509 Certificate Chain URL
    has_crit: boolean;  //Critical
}

export interface CanvasAnatomy {
    name: string;
    propertiesPanelOpen: boolean;
    lastModified: Date;
}

export interface JwtCanvas {
    canvasAnatomy: CanvasAnatomy;
    jwtAnatomy: JwtAnatomy;
    jwt: object;
}