# Chapter 1

Node.JS is an open source runtime environment.

It can do stuff like:
* Move/delete files
* Log data
* Create a web server with it (hint hint!)

When it comes to knowing Node.JS, the objective isn't to memorize commands for it (it's just JS), instead, you should try to understand the "ecosystem" of Node.JS, and use that understanding effectively.

# Version info

node -v to see what version is installed (v22.22.0)

Check that against https://nodejs.org/ - is it up-to-date?
It's in Maintenance LTS status right now. https://nodejs.org/en/about/previous-releases

It is good to use until approx April 2027. I *think* it'd be preferable to be on maintenance LTS over Active LTS; it mixes active support and stability.

> If you prefer not to install Node.js, you can run the Node.js command line examples and JavaScript code in the online playgrounds at https://codesandbox.io/s/new and https://stackblitz.com.

* CodeSandbox looks nice
* StackBlitz can choke on my cock and balls and blow it out its fucking ass. Eat shit and die.

# Regarding npm

You can run something like `npm -v` to see the current version number of npm, however, npm is essentially a part of Node.JS. That is to say, if you install Node, you (by default, at least) install npm, too. If you upgrade Node, you (by default) update npm, too. One is apart of the other, even thought they have different versions.

> One of the following versions of Node.js must be installed to run npm [...]

> npm comes bundled with node, & most third-party distributions, by default.

> If you're looking to manage multiple versions of node &/or npm, consider using a "Node Version Manager" such as: [...]

Yes, there are *ways and means* to just install npm, but for all intents and purposes, you (well, *I*) shouldn't bother trying to update npm individually. It is a widely used package manager for a *lot* of JavaScript related software.

If for some reason I wanted to have a specific version of npm (or node), I could use a node version manager like:
nvm, nvs, nave, etc. See: https://www.npmjs.com/package/npm/v/8.19.4

# package.json file

It is a key element to every Node.JS-based project.

## Location

It is always in the project root folder.

## What info does it store

Contains all of the metadata about the project. 

## Required info

package.json must have:
* Project name
* Project version

### Name field requirements

> The name field contains the package’s name, which must be one lowercase word but can contain hyphens and underscores

### Version field requirements

> The version field must follow semantic versioning guidelines, which suggest this format: major.minor.patch
>
> We call this semantic versioning because each number conveys a meaning.

More info is available at: https://semver.org/

#### Example
1.2.3

major.minor.patch

### Major version
A major version introduces an incompatible API change. You should generally be very careful about switching to another major version, as you won’t be able to expect that your application will work flawlessly.

### Minor version 
A minor version change adds new functionality in a backward-compatible manner and therefore shouldn’t pose problems for your application.

### Patch version
A patch version applies backward compatible bug fixes, and you should always keep it up to date.

## Optional info

package.json may have:
* Project description
* License
* Scripts
* Etc.

So...it's like the yaml file for docker compose, I guess.

## Example package.json

```json
{
    "name": "sample-express",
    "version": "1.0.0",
    "description": "sample express server",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "run": "node index.js"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "express": "^4.18.2"
    }
}
```

# node_modules folder

Contains the actual code

# Dependencies
There are both `dependencies`, and `devDependencies`.

Dependencies list everything needed to run a project, as well as required version numbers; npm only required the major version number (the "major" of major.minor.patch). This gives you a fairly up-to-date version of a dependency, without risking stability.

A dependency can be anything from a framework, to a helper module, to other types of things.

## Example
In a later project, we will have dependencies that require Next.JS (as a SPA framework) and "Mongoose" with MongoDB for the database.

## Install location
Dependencies are installed into the folder `node_modules`.

# devDependencies
These dependencies cover everything that is required to develop a project, as well as their version information. Generally speaking, the devDependencies may be lesser than regular dependencies, because you do not necessarily need to *run* the application, but merely develop something to be used by the application.

devDependencies are ignored by packaging scripts, and are not part of *deployed* applications.

devDependencies typically include things like: testing frameworks, linters, and build tools like webpack and Babel.

## Example
Again, for a later project, we will have devDependencies that require TypeScript's type definitions.

## Install location
Just like regular dependencies, devDependencies are installed into the folder `node_modules`.

# package-lock.json file
There is a problem with semantic versioning: Between different minor or patch versions new issues may be introduced. This is because npm has no quality control, meaning any patch or minor version update has the *potential* of introducing incompatible API changes (changes that *should have* been marked as major version changes.) This means that even minor updates could result in broken builds. And *that* is the problem that `package-lock.json` attempts to solve. `package-lock.json` attempts to do so by tracking the exact version of every package and their dependencies. As a result, the size of this file is usually very large, but its entries for the web server we will create later on will look similar to the example below.

## Example of package-lock.json file

```json
{
    "name": "sample-express",
    "lockfileVersion": 2,
    "requires": true,
    "packages": {
        "": {
            "dependencies": {
                "express": "^4.18.2"
            }
        },
        "node_modules/accepts": {
            "version": "1.3.8",
            "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
            "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEhosdQ==",
            --snip--
        },
        --snip--
        "node_modules/express": {
            "version": "4.18.2",
            "resolved": "https://registry.npmjs.org/express/-/express-4.18.2.tgz",
            "integrity": "sha512-5/PsL6iGPdfQ/lKM1UuielYgv3BUoJfz1aUwU9vHZ+J7gyvwdQXFEBIEI==",
            "dependencies": {
                "accepts": "~1.3.8",
                --snip--
                "vary": "~1.1.2"
            },
            "engines": {
                "node": ">= 0.10.0"
            }
        },
        --snip--
        "vary": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
            "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+bfhskkh=="
        }
    }
}
```
