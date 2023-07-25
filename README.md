# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev -o
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Used Components/Modules

- TailwindCSS
- [NuxtImage](https://v1.image.nuxtjs.org/get-started)

## Ordering Content

By default, content is ordered alphabetically based on the filename of the markdown file. 
To change the order, simply add a number to the filename. See [Official Documentation](https://content.nuxtjs.org/guide/writing/content-directory#ordering).

Examples:

- `1.first.md`
- `2.second.md`
- `default.md`
- `order.md`

## Adding Content

- add speaker `.md` file to `/content/<type>/<SPEAKER_FILENAME>.md`
- add image to `/public/<type>/<IMG_FILENAME>.jpg|png`
- set `img` property in `.md` file to `<IMG_FILENAME>.jpg|png`

Please see existing content for examples.
