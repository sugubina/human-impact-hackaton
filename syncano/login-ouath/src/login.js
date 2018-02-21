import Syncano from '@syncano/core';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default (ctx) => {
  const {response, users} = new Syncano(ctx)
  // const CLIENT_ID=process.env.CLIENT_ID;
  // const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const CLIENT_ID='666f7072bbaba9fc4e75'
  const CLIENT_SECRET = ctx.config.GITHUB_CLIENT_SECRET
  if (ctx.args.code) {

    let access_token;
    console.log(CLIENT_SECRET);
    const result = axios.post('https://github.com/login/oauth/access_token',
                            {client_id: CLIENT_ID,
                             client_secret: CLIENT_SECRET,
                             code: ctx.args.code})
                             .then( (rez) => {
                              //  console.log(JSON.parse(rez.data)['access_token'])
                              access_token = rez.data;
                              console.log(rez.data);
                              response.json({
                                message: `Hello ${ctx.args.code}! Here is your token:` + access_token
                              })
                             });
  
    // access_token = JSON.parse(result)['access_token']

  } else {
    response.json({
      message: 'You have to be authorized with code!'
    }, 400)
  }
}
