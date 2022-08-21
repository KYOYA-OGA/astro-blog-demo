import mailChannelsPlugin from '@cloudflare/pages-plugin-mailchannels';

export const onRequest: PagesFunction = mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: 'Astro test', email: 'kyoyaoga@gmail.com' }],
    },
  ],
  from: {
    name: 'Astro test',
    email: 'kyoyaoga@gmail.com',
  },
  respondWith: () => {
    return new Response(`Success!`);
  },
});
