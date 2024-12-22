import axios from "axios";
import constants from "../constants";
import { User } from "../models/User";

export class Actions {
  public static postSignUp(
    name: string,
    email: string,
    passwd: string
  ): Promise<boolean> {
    return axios
      .post(constants.api.signup.url, {
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
      const res = await axios.post(constants.api.login.url, {
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
}
