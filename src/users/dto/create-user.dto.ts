export interface CreateUserDto {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
}

export interface LoginUserDto {
  username: string;
  password: string;
}
