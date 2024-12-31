const baseUrl: string = "http://localhost:1337/api/";

export const api = {
  signup: {
    url: baseUrl + "auth/local/register",
  },
  login: {
    url: baseUrl + "auth/local",
  },
  events: {
    url: baseUrl + "events",
  },
};

export const texts = {
  bold: 700,
  color: {
    primary: "#0089e4",
    secondary: "#e9791a",
  },
};

export const colors = {
  primary: "#6aacd4",
  secondary: "#e9791a",
};

export const routes = {
  root: "/",
  about: "/sobre",
  guide: "/manual",
  events: "/eventos",
  addEvent: "/novo-evento",
  signup: "/criar-conta",
  login: "/login",
  profile: "/perfil",
};
