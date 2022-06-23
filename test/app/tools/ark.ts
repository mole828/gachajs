import superagent from 'superagent';

const token = 'KQQVv1/4i94WWvSYRIeMs';

async function basic(token:string) {
  superagent
    .post('https://as.hypergryph.com/u8/user/info/v1/basic')
    .send({
      appId: 1,
      channelMasterId: 1,
      channelToken: {
        token,
      },
    }).end((...args) => {
      console.log(args);
    });
}

basic(token);
