import { Injectable } from "@nestjs/common";
import axios from "axios";


@Injectable()
export class PowensService {
  private powens_url = process.env.POWENS_URL;

  async test(code: string): Promise<string> {
    const result = await axios.post(this.powens_url + "auth/token/access",
      {
        code,
        client_id: process.env.POWENS_CLIENT_ID,
        client_secret: process.env.POWENS_CLIENT_SECRET
      },)
    const token: string = result.data.access_token
    return token;
  }
}
