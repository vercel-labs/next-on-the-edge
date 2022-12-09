## Next.js on the Edge

This is a demo of [Next.js](https://nextjs.org) using the Edge Runtime.

This template uses the new `app` directory (beta) in Next.js 13. This includes support for enhanced layouts, colocation of components, tests, and styles, component-level data fetching, and more.

## How it works

The index route `/` uses the Edge Runtime through:

```js
export const runtime = 'experimental-edge';
```

[Learn more](https://beta.nextjs.org/docs/rendering/edge-and-nodejs-runtimes).
