import Prismic  from '@prismicio/client';

export const apiEndpoint = 'https://ousia.cdn.prismic.io/api/v2';
export const options = {};
export const Client = () => (Prismic.client(apiEndpoint, options));
