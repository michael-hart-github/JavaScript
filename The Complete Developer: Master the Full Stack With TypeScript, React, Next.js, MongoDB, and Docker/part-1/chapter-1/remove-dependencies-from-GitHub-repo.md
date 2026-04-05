# To avoid having to keep a copy of express.js in my repo, I should do something like this:

- Have `package.json` and `package-lock.json` in my repo
- Do NOT have `node_modules` in the git repo
- Have `.gitignore` set to ignore `node_modules`
- Tell `git` to stop tracking `node_modules`

# Short version

1. Add node_modules/ to `.gitignore`
2. `git rm -r --cached path/to/directory/node_modules`
3. `git push`
4. PR the merge
5. `git switch master && git pull && git switch previous-branch`

# Add directory to .gitignore

1. I navigated to the TLD (JavaScript/) in terminal: `cd ~/Documents/GitHub/JavaScript/`
2. I edited `.gitignore` to include `node_modules/`
3. I committed that change to git with: `git commit -am "I added node_modules/ to .gitignore"`

## Send the change to GitHub

1. I ran `git push`
2. I PR'd the merge request into `master`

## Sync with remote

1. I ran `git pull` to pull the merge into `remote` (my computer)

# Untrack the file in git

1. While still in the TLD, I ran: `git rm -r --cached The\ Complete\ Developer\:\ Master\ the\ Full\ Stack\ With\ TypeScript\,\ React\,\ Next.js\,\ MongoDB\,\ and\ Docker/sample-express/node_modules`
2. That command removed the `node_modules` directory (and subdirectories) from `git` for _tracking_ but it did **not** delete the local `node_modules` directory or subdirectories from my local computer
3. I ran `git commit -am "{textExplainingWhatIDid}"`

## Send the change to GitHub

1. I ran `git push` to push to `origin` (GitHub)
2. I PR'd the push into `master` (GitHub)

## Sync my local computer

1. I ran `git pull` to pull the merge into `remote` (local computer)
