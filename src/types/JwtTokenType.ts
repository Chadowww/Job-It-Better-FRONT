export interface JwtTokenType {
  iat: number;
  exp: number;
  roles: string[];
  username: string;
}
