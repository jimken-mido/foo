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

This command generates static content into the `build` directory. This `build` directory is not used to build the website, but this step is provided here in case you want to build a local copy.

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

## Add a Version

When you want to create a new version of the docs do:

```bash
yarn docusaurus docs:version v9.9
```

where `v9.9` should be replaced with the version you require.

This command will:

- Copy the full docs/ folder contents into a new `versioned_docs/version-[v9.9]/ folder`.
- Create a versioned sidebars file `versioned_sidebars/version-[versionName]-sidebars.json`.
- Add the new version number to `versions.json`.

## Remove a Version

If we need to remove a no-longer-supported version of the docs, remove the reference to the version in `versions.json`.

# To Do

## Right Now

At the moment the repo is public (under Jim's name) and the website is public (on github pages), therefore we can only use Lorem Ipsum content.

- Add placeholders for various releases

- Check with Aaron on status of:

https://aitrios.atlassian.net/browse/CTRL-4921

https://aitrios.atlassian.net/browse/CTRL-4920

https://aitrios.atlassian.net/browse/CTRL-4917

- Check if the phoenix svg is legal to use
- Check how it looks on mobile
- Use Midokura colours

## Next Up

Once the repo is private (under the Midokura name) and the website is password-protected (on docs.midokura.com), we can start adding the real content.

- Add password protection
- Add password to bitwarden
- Add some marketing text content for the front page
- In the navbar should we remove direct link to Github repo, if clients cannot access it?
- In the navbar, rename Tutorial to Docs
- In the navbar, rename Blog to Release Notes
- Switch Lorem Ipsum content for real content
- Rewrite the README above to explain how to do a docs release 

## Done

- Tidy up the phrasing of the copyright notice, currently Copyright © 2026 Midokura
- Replace footer logo with Midokura text logo
- Remove 'Next' from releases list, so that the website only updates on version releases, not on pushes to main. This was set by 'includeCurrentVersion: false,'
- Make background  hero image color gradient in Midokura colors
