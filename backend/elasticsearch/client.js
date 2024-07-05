import { Client } from '@elastic/elasticsearch';
import dotenv from 'dotenv';
dotenv.config()

export const client = new Client({
  cloud: {
    id: process.env.CLOUDID,
  },
  auth: {
   apiKey: process.env.APIKEY
  },
});

client.ping()
  .then(response => console.log("You are connected to Elasticsearch!"))
  .catch(error => console.error("Elasticsearch is not connected."))