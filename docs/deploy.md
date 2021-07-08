

https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

## Prerequisites :

GitHub Account.
Install Git in your machine and Set up Git.
Make sure you have Node.js and Npm installed in your machine.

Install Node.js
Install Npm
Notice You’ll need to have Node 8.10.0 or later on your local machine.

## Procedure :

### 1- First create a repository named my-app using create-react-app.

`npm init react-app my-app`

### 2- We need to install GitHub Pages package as a dev-dependency.

```bash
cd my-app
npm install gh-pages --save-dev
```

### 3- Add properties to package.json file.

The first property we need to add at the top level homepage second we will define this as a string and the value will be `"http://{username}.github.io/{repo-name}"` {username} is your GitHub username, and {repo-name} is the name of the GitHub repository you created it will look like this :

`"homepage": "http://yuribenjamin.github.io/my-app"`

Second in the existing scripts property we to need to add predeploy and deploy.

```json
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```

package.json example

### 4- Create a Github repository and initialize it and add it as a remote in your local git repository.

Now, create a remote GitHub repository with your app name and go back initialize this
```bash
git init
add it as remote
git remote add origin git@github.com:<>/my-app.git
```
### 5- Now deploy it to GitHub Pages

```bash
# just run the following command :

npm run deploy
```
successful build

this command will create a branch named gh-pages this branch host your app, and homepage property you created in package.json file hold your link for a live preview, or you can open the branch setting scroll down to GitHub Pages section you will find this:
Your site is puplished

Visit deployed app

### 6- commit and push your commit to GitHub. Optionally
```bash
git add .
git commit -m "Your awesome message"
git push origin master
```