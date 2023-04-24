export const API = {
  verb: "http",
  namespace: "",
  server: "localhost",
  port: "3001",
};

export const APP = {
  verb: "http",
  namespace: "",
  server: "localhost",
  port: "3000",
};

export const BASE_API = API.port
  ? `${API.verb}://${API.server}:${API.port}`
  : `${API.verb}://${API.server}`;

export const BASE_APP = API.port
  ? `${APP.verb}://${APP.server}:${APP.port}`
  : `${APP.verb}://${APP.server}`;
