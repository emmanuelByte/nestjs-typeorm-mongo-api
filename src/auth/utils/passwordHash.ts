import * as bcrypt from 'bcrypt';
export class PasswordService {
  static async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
  static async unHashPassword(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}
