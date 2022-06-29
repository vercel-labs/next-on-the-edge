## next-on-the-edge

In the spirit of [sveltekit-on-the-edge](https://github.com/Rich-Harris/sveltekit-on-the-edge) and [react-on-the-edge](https://github.com/vercel/react-on-the-edge),
this project uses the experimental [Edge SSR](https://nextjs.org/blog/next-12-2#edge-server-rendering-experimental) in [Next.js 12.2+](https://nextjs.org/blog/next-12-2) to
render a page just in time.

## How it works

`pages/index.js` implements [`runtime: "experimental-edge"`](https://github.com/vercel/next-on-the-edge/blob/main/pages/index.js).

City and IP are read from `getServerSideProps`. That's it!
