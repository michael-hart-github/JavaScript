# Summary

I switched from Fedora to Pop_OS! so I had to reinstall a bunch of stuff. Here's some house cleaning stuff for the re-install

## Installation

To install npm and node, the following webpage should list everything you need:

https://nodejs.org/en/download

## Secondary reference

In the event that it doesn't, or you want a secondary reference here's how it works for Linux:

On that webpage, select Get Node.js -> `24.15.0 (LTS)` -> for `Linux` -> using `nvm` -> with `npm`

```bash
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 24

# Verify the Node.js version:
node -v # Should print "v24.15.0".

# Verify npm version:
npm -v # Should print "11.12.1".
```

## CLI

For my own install, here's how it looked for me:

```bash
$ cd ~
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

[snip]

$ \. "$HOME/.nvm/nvm.sh"
$ nvm install 24

[snip]

$ node -v
[snip]
$ npm -v
[snip]
$ nvm -v
[snip]
$ cd Documents/JavaScript
$ node -v
[snip]
$ npm -v
[snip]
$ nvm -v
[snip]
```

So, in the event there is an update to Node.js, nvm, or npm, I'd probably want to do the update in `/home/username/`, rather than `/home/username/Documents/some-folder`