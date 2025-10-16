import * as crypto from 'crypto';

const AES_SECRET = process.env.AES_SECRET || 'default_rusty_key_2025';
const IV_LENGTH = 16;

export class AESUtil {
  static encrypt(text: string): string {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(AES_SECRET, 'utf8').slice(0, 32), iv);
    let encrypted = cipher.update(text, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return iv.toString('base64') + ':' + encrypted;
  }

  static decrypt(encrypted: string): string {
    const [ivStr, enc] = encrypted.split(':');
    const iv = Buffer.from(ivStr, 'base64');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(AES_SECRET, 'utf8').slice(0, 32), iv);
    let decrypted = decipher.update(enc, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}
