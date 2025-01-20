const baseUrl: string = "http://localhost:1337/api/";

export const api = {
  base: baseUrl,
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

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;

export const texts = {
  bold: 700,
  color: {
    primary: "#0089e4",
    secondary: "#e9791a",
  },
};

export const routes = {
  root: "/",
  about: "/sobre",
  guide: "/manual",
  events: "/eventos",
  eventDetails: "/eventos/:slug",
  signup: "/criar-conta",
  login: "/login",
  profile: "/perfil",
};
