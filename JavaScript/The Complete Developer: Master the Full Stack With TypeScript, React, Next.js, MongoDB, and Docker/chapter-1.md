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