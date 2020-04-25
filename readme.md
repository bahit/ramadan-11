# Ramadan 11

Ramadan 11 is a progressive web app (PWA) is for helping fellow muslim and muslimah in doing their Ramadan Terawih and Witir prayer by showing clear instructions and steps on which surah to read on each raka'at. Ramadan 11 is a PWA website powered using Ionic PWA Toolkit.

## Why 11?

Because this PWA focus on having 8 raka'at for Terawih prayer and 3 raka'at for Witir. Then combining 8 + 3 = 11. Thus, 11.

## Features

WIP

## Getting Started

To start building, clone this repo to a new directory:

```bash
npm init stencil ionic-pwa
```

## Production

To build for production, run:

```bash
npm run build
```

A production build includes:

- Minified code bundles
- Generated Service workers
- App manifest

## Hosting

Apps should be hosted on through HTTPS, and if possible, through a provider that supports HTTP2.
One provider that does support this is [Firebase Hosting](https://firebase.google.com/docs/hosting/).

## H2 Push

We recommend setting up HTTP2 Push on Firebase. H2 Push may sound complicated, but it's actually a simple concept. To learn about it, take a look at this [article](https://en.wikipedia.org/wiki/HTTP/2_Server_Push).

To set this up for `my-app`:

- Do a production build of the app: `npm run build`
- Serve your WWW folder locally using a local http server and open in your browser.
  - https://www.npmjs.com/package/http-server works pretty well for this. You can serve your www folder by running `http-server www`.
- Open the DevTools and look at the network tab.
  - Reload the page and you should see all of your files show up in the network tab. Excluding the `sw.js` file, these are the files you want to H2 push.
- List these files in the link headers of your firebase.json file. For a syntax reference, review this [article](https://w3c.github.io/preload/#server-push-http-2)

## Service Workers

Service workers are generated via the Stencil build tool. For more information on how they can be configured, see the [Service Worker docs](https://stenciljs.com/docs/service-workers).

## Developing with a Service Worker

For most cases, you'll want to develop your app without generating a Service Worker. But if you'd like to test out Web Push Notifications or Background Sync, you'll need to have one generated. To generate a Service Worker during dev builds, we've added the npm script:

```
npm run start.sw
```

This will start a dev build and generate a Service Worker as well.

## Unit Tests

To run the unit tests once, run:

```bash
npm test
```

To run the unit tests and watch for file changes during development, run:

```bash
npm run test.watch
```

## Testing your PWA's performance

We recommend using https://www.webpagetest.org/easy with the `Run Lighthouse Audit` option turned on.
This will give you an in depth look into your app's load performance on the average device connected to the average network.
For more info on how to use webpagetest check out [this article](https://zoompf.com/blog/2015/07/the-seo-experts-guide-to-web-performance-using-webpagetest-2)

# License

MIT License
Copyright (c) 2020 Ramadan-11 - Bahit Hamid
