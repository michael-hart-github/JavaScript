# Standalone scripts

There are cases where you should run a script or something a _one single time_ for a repo you have access to. The example given in the book is:

> [...] a scaffolding script that initializes a project but is neither a dependency nor a development dependency.

The intended way you should run a script with npm is with `npx`

# What is npx?

It stands for node package execute.

## How does npx work?

1. npx verifies if the executable you run to it already exists in either:
   - $PATH environment variable
   - Local project binaries
2. If false
   - npx installs the package to "central cache" _instead of_ `node_modules`.
3. If true
   - (I suppose?) npx installs the package to `node_modules`

The book goes on to give an example that goes something like this:

## Example

You want to lint a JSON file

You know of a package called `jsonlint` which can be used to lint the file, which is what you want. However, linting _is not_ a project dependency, and _is not_ a required development process.

For that reason, you don't want to install `jsonlint` to `node_modules`.

Instead of making jsonlint a dependency, you can run: `npx jsonlint package.json`

## When you execute the command `npx jsonlint package.json`, npx is doing this:

1. npx _installs_ the package `jsonlint` into the "global cache folder"
2. It _runs_ `jsonlint`
3. It _prints_ the contents of `package.json`
4. It reports (hopefully) no errors
