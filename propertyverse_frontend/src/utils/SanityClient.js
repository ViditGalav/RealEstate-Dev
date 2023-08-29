import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';


const config = {
   projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
   dataset: 'production',
   apiVersion: '2023-08-25',
   useCdn: false,
   token: process.env.REACT_APP_SANITY_TOKEN
};

const Client = createClient(config);

export default Client;
const builder = imageUrlBuilder(Client);

export const urlFor = (source) => builder.image(source);

