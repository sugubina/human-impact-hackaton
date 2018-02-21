import Syncano from "@syncano/core";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export default ctx => {
  const { response, users } = new Syncano(ctx);
  const CLIENT_ID = "666f7072bbaba9fc4e75";
  const CLIENT_SECRET = ctx.config.GITHUB_CLIENT_SECRET;
  if (ctx.args.code) {
    let access_token;
    const result = axios
      .post("https://github.com/login/oauth/access_token", {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: ctx.args.code
      })
      .then(rez => {
        var str = rez.data;
        var matches = str.match(/access_token=([^&]*)/);
        access_token = matches[1];
        response.json({
          message: `Hello ${ctx.args.code}! Here is your token:` + access_token
        });
      });
  } else {
    response.json(
      {
        message: "You have to be authorized with code!"
      },
      400
    );
  }
};
