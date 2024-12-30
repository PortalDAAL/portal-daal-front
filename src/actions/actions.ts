import axios from "axios";
import { api } from "../constants";
import { User } from "../models/User";
import { Event } from "../models/Event";

export class Actions {
  public static postSignUp(
    name: string,
    email: string,
    passwd: string
  ): Promise<boolean> {
    return axios
      .post(api.signup.url, {
        username: name,
        email: email,
        password: passwd,
      })
      .then((res) => {
        if (res.status === 200 || res.status === 204) return true;
        else return false;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  }

  public static async postLogin(
    email: string,
    passwd: string
  ): Promise<User | null> {
    try {
      const res = await axios.post(api.login.url, {
        identifier: email,
        password: passwd,
      });
      console.log(res);
      return {
        id: res.data.user.id,
        username: res.data.user.username,
        email: res.data.user.email,
        blocked: res.data.user.blocked,
        createdAt: res.data.user.createdAt,
        token: res.data.jwt,
      } as User;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  public static async getEvents(): Promise<Event[] | null> {
    try {
      const res = await axios.get(api.events.url);

      if (res.status == 200) {
        return res.data.data as Event[];
      }
      throw new Error(res.statusText);
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
