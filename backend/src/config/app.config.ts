const APP_CONFIG = {
  PORT: !isNaN(Number(process.env.API_PORT)) ? process.env.API_PORT : 3001,
};

export default APP_CONFIG;
