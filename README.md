# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn run start
```

This command starts a local development server and opens up a browser window at: [http://localhost:3000/foo/](http://localhost:3000/foo/). Most changes are reflected live without having to restart the server.

Use Control + c to kill the localhost.

## Build

```bash
yarn run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# To Do

## Right Now

At the moment the repo is public (under Jim's name) and the website is public (on github pages), therefore we can only use Lorem Ipsum content.

- Check ability to remove 'Next' from releases list, so that the website only updates on version releases, not on pushes to main.
- Check with Aaron on status of:
-- https://aitrios.atlassian.net/browse/CTRL-4921
-- https://aitrios.atlassian.net/browse/CTRL-4920
-- https://aitrios.atlassian.net/browse/CTRL-4917
- Check if the phoenix svg is legal to use
- Check how it looks on mobile

## Next Up

Once the repo is private (under the Midokura name) and the website is password-protected (on docs.midokura.com), we can start adding the real content.

- Add some marketing text content for the front page
- In the navbar should we remove direct link to Github repo, if clients cannot access it?
- In the navbar, rename Tutorial to Docs
- In the navbar, rename Blog to Release Notes
- Switch Lorem Ipsum content for real content
  