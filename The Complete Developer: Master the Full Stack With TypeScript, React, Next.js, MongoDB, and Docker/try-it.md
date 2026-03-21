So, to avoid having to keep a copy of express.js in my repo, I should do something like this:

* Have `package.json` in my repo
* Do NOT have `node_modules` in the git repo
* Have `.gitignore` set to ignore `node_modules`
* Tell `git` to stop tracking `node_modules`

---

That worked!

---

So to recap, I did this:

# Ignore the file in git
1. I navigated to the TLD (JavaScript/) in terminal: `cd ~/Documents/GitHub/JavaScript/`
2. I edited `.gitignore` to include `node_modules/`
3. I commited that change to git: `git commit -am "{textSayingIUpdated.gitignore}"`

## Send the change to GitHub
4. I ran `git push` to `push` to `origin` (GitHub)
5. I PR'd the request into `master` (GitHub)

## Sync my local computer
6. I ran `git pull` to pull the merge into `remote` (local computer)

# Untrack the file in git
7. While still in the TLD, I ran: `git rm -r --cached The\ Complete\ Developer\:\ Master\ the\ Full\ Stack\ With\ TypeScript\,\ React\,\ Next.js\,\ MongoDB\,\ and\ Docker/sample-express/node_modules`
8. That command removed the `node_modules` folder (and its subdirectories) from `git` for *tracking* but it did **not** delete the local `node_modules` folder (or its subdirectories) from my local computer, which is what I wanted
9. I ran `git commit -am "{textExplainingWhatIDid}"`

## Send the change to GitHub
10. I ran `git push` to push to `origin` (GitHub)
9. I PR'd the push into `master` (GitHub)

## Sync my local computer
10. I  ran `git pull` to pull the merge into `remote` (local computer)
