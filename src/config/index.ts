const config = {
  BASE_URL: import.meta.env.VITE_BASE_URL,
  API_URL: import.meta.env.VITE_API_URL,
  CRYPTO_SECRET: import.meta.env.VITE_CRYPTO_SECRET,
  CRYPTO_IV: import.meta.env.VITE_CRYPTO_IV,
  EMAIL_ACCESS_KEY: import.meta.env.VITE_EMAIL_ACCESS_KEY,
  EMAIL_SERVICE_API: import.meta.env.VITE_EMAIL_SERVICE_API,
};

export default config;
