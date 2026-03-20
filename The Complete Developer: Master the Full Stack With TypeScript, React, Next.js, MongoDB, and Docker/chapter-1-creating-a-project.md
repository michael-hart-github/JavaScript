# Creating a Project
Below will be some of the most-used day-to-day commands for working on a project. By performing these commands, I will have made a package.json file, and a production-ready project folder that has one installed package: Express.JS

## Make a folder, move in, and initialize npm
Pretty standard stuff out-of-the-gate. You need to make a project folder, go into the folder you made, and initialize inside of it, just like you would with git, or Rust or whatever.

1. `mkdir sample-express`
2. `cd sample-express`
3. `npm init`

# Installing dependencies

To do things like accessing a filesystems input & output, use the modules provided by npm. The modules available covers things like: DNS, HTTP, TCP, TLS/SSL, UDP, handling binary data, cryptography, interfaces for data streams, and other things.

If you run npm install <package> it functions like `dnf5`, the difference being that the files will be installed into the `node_modules` folder. (Man, I feel like I've already written this! :)

So, if you need to make an Express.JS server, you (obviously) need to install Express.JS
`npm install express`

And if you wanted to install a specific version it would be:
`npm install express@4.18.2`

# Installing devDependencies

To install developer dependencies that will not be included as part of a package for end users, run this command:

`npm install --save-dev karma@5.0.0`

Notice that npm complains about various vulnerabilities.

# Auditing package.json

Now that we have installed (all of?) the stuff we need, we should audit the packages and their dependencies.

`npm audit`

Generally speaking, you should run `npm audit` *at least* once every few months.

## Fixing vulnerabilities with --force

After checking the report, you may have seen something like

> Depends on vulnerable versions of ua-parser-js
> fix available via `npm audit fix --force`

Basically, we're being warned that, although `npm audit fix` is usually enough to fix most minor vulnerability problems, the `--force` flag may be required in some cases. It is explicitly required here, because in applying the fix for karma, we will be forced into a newer version of karma, which will take us off of 5.x.x to 6.x.x This is an issue because the thing we are working on might rely on karma being at 5.x.x; so, to ensure that we're paying attention, we use the --force flag. It's a simple way to say, "I accept that stuff could break, but the security fix is more important."

## Pruning the folder

After doing things like npm audit fix, it's wise to perform a pruning as well, to ensure that no unnessacary dependecies are still hanging around.

`npm prune`

## Updating npm

Simply put, you should make sure npm is updated frequent to avoid security and outdated dependency issues.

`npm update`

## Removing dependencies

If you have something like end-to-end testing installed (karma) and later decide you no longer need it, you can have it removed from `node_modules` and `package.json` with

`npm uninstall karma`

## Installing dependencies

If you need to install dependencies and devDependencies onto a computer, you can use `npm install` to have them installed into `node_modules`.

If you wish to simulate this, do the following

1. Make a new folder
2. Copy and paste `package.json` and `package-lock.json` into that folder
3. Within that folder, run `npm install`

