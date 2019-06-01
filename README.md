# awesome-javascript
👨‍💻 let's simply set up JavaScript development environment

## Tutorial
* [간단하게 구축해 보는 JavaScript 개발 환경](https://d2.naver.com/helloworld/2564557)
* [Tutorial Repository](https://github.com/stunstunstun/awesome-javascript)

## Create Git Repository
### Command
```
$ mkdir awesome-javascript
$ cd awesome-javascript
$ git init
...
$ git remote add origin https://github.com/${github_id}/awesome-javascript
$ git remote -v
origin  https://github.com/${github_id}/awesome-javascript (fetch)  
origin  https://github.com/${github_id}/awesome-javascript (push) 
```
### Link
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [Pro Git](https://git-scm.com/book/ko/v2)
* [GitHub Help](https://help.github.com/en)

## Github Template for Issue & Pull Request
### Command
```
$ git checkout -b devops/github-templates
$ mkdir .github
$ touch .github/PULL_REQUEST_TEMPLATE.md # Create pull request template
$ cd .github
$ mkdir ISSUE_TEMPLATE
$ touch .github/bug_report.md # Create bug report template
$ touch .github/feature_request.md # Create feature request template
$ git commit -m 'chore: create issue & pull request template'
$ git push -u origin devops/github-templates
```

### Link
* [Manually creating a single issue template for your repository](https://help.github.com/en/articles/manually-creating-a-single-issue-template-for-your-repository)
* [Creating a pull request template for your repository](https://help.github.com/en/articles/creating-a-pull-request-template-for-your-repository)

## Node.js, npm and Yarn
### Command
```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
$ nvm install 10.15.3
$ node -v && npm -v
v10.15.3  
6.4.1
$ npm install yarn -g
```
### Link
* [Node.js](https://nodejs.org/ko/docs)
* [npm](https://docs.npmjs.com)
* [Yarn](https://yarnpkg.com/en/docs)