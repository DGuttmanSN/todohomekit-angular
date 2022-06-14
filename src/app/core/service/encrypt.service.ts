import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  constructor() { }

set(password:string){
  let key = CryptoJS.enc.Utf8.parse("key");
  let iv = CryptoJS.enc.Utf8.parse("key");
  let encriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(password.toString()), key, {
    keySize: 128/8,
    iv:iv,
    mode: CryptoJS.mode.CBC,
    padding:CryptoJS.pad.Pkcs7
  });
  return encriptado.toString();
}

}
