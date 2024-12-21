const baseUrl : string = "http://localhost:1337/api/";

export default {
  api: {
    signup:{ 
      url: baseUrl + "auth/local/register"
    },
    login: {
      url: baseUrl + "auth/local"
    },
    events: {
      url: baseUrl + "events"
    }
  }
}