import gql from 'graphql-tag';

import {
  createClient
} from '@aerogear/voyager-client';

let config = {
  httpUrl: "http://localhost:4000/graphql",
  wsUrl: "ws://localhost:4000/graphql",
}

async function helloWorld() {
  
  let client = await createClient(config);
  client.query({
      fetchPolicy: 'network-only',
      query: gql`{hello}`
    })
    .then( ({data}) => {
      console.log(data.hello)
    });

  
}

helloWorld();

