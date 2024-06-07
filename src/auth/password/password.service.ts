import { Injectable } from "@nestjs/common";
import { genSaltSync, hashSync } from "bcrypt";

@Injectable()
export class PasswordService {
  encryptPassword(password: string) {
    const saltRounds = 10;
    const salt = genSaltSync(saltRounds);
    const hash = hashSync(password, salt);

    return hash;
  }
}
