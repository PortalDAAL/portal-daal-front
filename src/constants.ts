const baseUrl: string = "http://localhost:1337/api/";

export default {
  api: {
    signup: {
      url: baseUrl + "auth/local/register",
    },
    login: {
      url: baseUrl + "auth/local",
    },
    events: {
      url: baseUrl + "events",
    },
  },
  texts: {
    bold: 700,
    color: {
      primary: "#0089e4",
      secondary: "#e9791a",
    },
  },
  routes: {
    root: "/",
    about: "/sobre",
    guide: "/manual",
    events: "/eventos",
    addEvent: "/novo-evento",
    signup: "/criar-conta",
    login: "/login",
    profile: "/perfil",
  },
};
