import { AES, enc } from "crypto-js";
import config from "@/config";

let { CRYPTO_SECRET } = config;
if (!CRYPTO_SECRET) {
    throw new Error("CRYPTO_SECRET is not defined");
}
const encryptData = <T>(data: T): string => {
    const encrypted = AES.encrypt(
        JSON.stringify(data),
        CRYPTO_SECRET
    ).toString();

    return encrypted;
};

const decryptData = <T>(encryptedData: string): T => {
    const decrypted = AES.decrypt(
        encryptedData,
        CRYPTO_SECRET
    ).toString(enc.Utf8);

    return JSON.parse(decrypted);
};

const encryptID = (id: string): string => {
    const encrypted = AES.encrypt(
        id,
        CRYPTO_SECRET
    ).toString();

    return encrypted;
};

const decryptID = (encryptedId: string): string => {
    const decrypted = AES.decrypt(
        encryptedId,
        CRYPTO_SECRET
    ).toString(enc.Utf8);

    return decrypted.toString();
};

export { encryptData, decryptData, encryptID, decryptID };