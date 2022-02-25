import { Injectable } from '@nestjs/common';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { createDecipheriv } from 'crypto';

@Injectable()
export class EncryptService {
    master_key = '12345678';
    iv = randomBytes(16)

    async encrypt(password: string){
        // Password generation key
        const key = (await promisify(scrypt)(this.master_key, 'salt', 32)) as Buffer;
        const cipher = createCipheriv('aes-256-ctr', key, this.iv);

        const encryptedText = Buffer.concat([
            cipher.update(password),
            cipher.final(),
          ]);
    }

    async decrypt(encrypted_password){
        const decipher = createDecipheriv('aes-256-ctr', this.master_key, this.iv);
        const decryptedText = Buffer.concat([
            decipher.update(encrypted_password),
            decipher.final(),
        ]);

        return decipher

    }
    
}
