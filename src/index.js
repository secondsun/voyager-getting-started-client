import gql from 'graphql-tag';
import { init } from '@aerogear/app';

import {
  createClient
} from '@aerogear/voyager-client';


async function helloWorld() {
  
  let client = await createClient({
    openShiftConfig:{
      "version": 1,
      "namespace": "myproject",
      "clientId": "getting-started",
      "services": [
        {
          "id": "72197937-3382-11e9-968e-52540014a8c2",
          "name": "sync-app-getting-started-getting-started",
          "type": "sync-app",
          "url": "https://sync-app-getting-started-myproject.192.168.42.138.nip.io/graphql",
          "config": {
            "websocketUrl": "wss://sync-app-getting-started-myproject.192.168.42.138.nip.io/graphql"
          }
        }
      ]
    }
  });
  client.query({
      fetchPolicy: 'network-only',
      query: gql`{hello}`
    })
    .then( ({data}) => {
      console.log(data.hello)
    });

  
}

helloWorld();

