# Creating a Project

Below will be some of the most-used day-to-day commands for working on a project. By performing these commands, I will have made a package.json file, and a production-ready project directory that has one installed package: Express.JS

## Make a directory, move in, and initialize npm

Pretty standard stuff out-of-the-gate. You need to make a project directory, go into the directory you made, and initialize inside of it, just like you would with git, or Rust or whatever.

```shell
mkdir sample-express
cd sample-express
npm init
```

# Installing dependencies

To do things like accessing a filesystems input & output, use the modules provided by npm. The modules available covers things like: DNS, HTTP, TCP, TLS/SSL, UDP, handling binary data, cryptography, interfaces for data streams, and other things.

If you run npm install <package> it functions like `dnf5`, the difference being that the files will be installed into the `node_modules` directory. (Man, I feel like I've already written this! :)

So, if you need to make an Express.JS server, you (obviously) need to install Express.JS
```shell
npm install express
```

And if you wanted to install a specific version it would be:
```shell
npm install express@4.18.2
```

# Installing devDependencies

To install developer dependencies that will not be included as part of a package for end users, run this command:
```shell
npm install --save-dev karma@5.0.0
```

Notice that npm complains about various vulnerabilities.

# Auditing package.json

Now that we have installed (all of?) the stuff we need, we should audit the packages and their dependencies.

```shell
npm audit
```

Generally speaking, you should run `npm audit` _at least_ once every few months.

## Fixing vulnerabilities with `--force`

After checking the report, you may have seen something like

> Depends on vulnerable versions of ua-parser-js
> fix available via `npm audit fix --force`

Basically, we're being warned that, although `npm audit fix` is usually enough to fix most minor vulnerability problems, the `--force` flag may be required in some cases. It is explicitly required here, *because* in applying the fix for karma, we will be forced into a newer version of karma, which will take us off of 5.x.x to 6.x.x This is an issue because the thing we are working on might rely on karma being at 5.x.x; so, to ensure that we're paying attention, we use the --force flag. It's a simple way to say, "I accept that stuff could break, but the security fix is more important."

## Pruning the directory

After doing things like npm audit fix, it's wise to perform a pruning as well, to ensure that no unnecessary dependencies are still hanging around.
```shell
npm prune
```

## Updating npm

Simply put, you should make sure npm is updated frequent to avoid security and outdated dependency issues.
```shell
npm update
```

## Removing dependencies

If you have something like end-to-end testing installed (karma) and later decide you no longer need it, you can have it removed from `node_modules` and `package.json` with
```shell
npm uninstall karma
```

## Installing dependencies

If you need to install dependencies and devDependencies onto a computer, you can use `npm install` to have them installed into `node_modules`.

If you wish to simulate this, do the following:

1. Make a new directory
2. Copy and paste `package.json` and `package-lock.json` into that directory
3. Within that directory, run `npm install`

That will install the dependencies listed in both package* files into the new directory.

# Conclusion
Overall, this should be the big take away from this section: When you upload repos to GitHub, *do not* include the dependencies in the repo. Instead, include the package* files, so the person who downloads the repo can install the depenedcies themself using `npm install`. That helps to ensure that the person cloning your repo:
1. Has more up-to-date dependencies
2. The clone of the repo goes much quicker

## How do I set a local repo so the dependencies will not be uploaded to GitHub/GitLab/etc.?
Preferably, the process should look something like this
1. Create directory
2. `git init; git switch -c first-branch;`
3. Open `.gitignore`
4. Add the line node_modules/
5. Save and close the file
6. `npm install stuff`
   1. Note: You now have dependencies installed locally, but they will not be staged in the commit.
7. `git add .; git commit -am "First commit"; git push -u origin first-branch;`

See: [remove-dependencies-from-GitHub-repo.md](remove-dependencies-from-GitHub-repo.md) for more.