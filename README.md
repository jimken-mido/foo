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

If we need to remove a no-longer-supported version of the docs from the website, remove the reference to the version in `versions.json`. Note that this doesn't delete the version source files, but just unpublishes them from the website.
