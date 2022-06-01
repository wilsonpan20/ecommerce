import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'ksiure2f',
    dataset:'production',
    apiVersion:'2022-05-31',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const buider = imageUrlBuilder(client);

export const urlFor = (source) => buider.image
(source);