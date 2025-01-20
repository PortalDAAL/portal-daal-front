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
      const res = await axios.post(api.login.url + "?populate=*", {
        identifier: email,
        password: passwd,
      });
      console.log(res);
      return {
        id: res.data.user.id,
        documentId: res.data.user.documentId,
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
      const res = await axios.get(api.events.url + "?populate=poster");

      if (res.status == 200) {
        return res.data.data as Event[];
      }
      throw new Error(res.statusText);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  public static async getEvent(eventId: string): Promise<Event | null> {
    try {
      const res = await axios.get(
        api.events.url + "?filters[slug][$eq]=" + eventId + "&populate=*"
      );

      if (res.status == 200) {
        const events = res.data.data as Event[];
        return events.pop() as Event;
      }
      throw new Error(res.statusText);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  public static async subscribeUserOnEvent(
    eventId: string,
    user: User
  ): Promise<boolean> {
    console.log(eventId);
    console.log(user);
    // FIXME: ver porque o campo "users" não está sendo reconhecido...
    const res = await axios.put(
      `${api.events.url}/${eventId}`,
      {
        data: {
          users: {
            connect: [user.documentId],
          },
        },
      },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );

    console.log(res);
    return false;
  }
}
