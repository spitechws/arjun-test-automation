# Steps needed to run

#### Software/Tools needed to be installed
- Install NodeJS : https://nodejs.org/en
- Install VSCode
- Install gitbash https://git-scm.com/downloads

#### Install
- npm install

#### Switch Environment (local/preProd/prod/dev/qa)
- export ENV=prod

#### Execute these commands one by one
- npm run wdio ./wdio.conf.js -- --cucumberOpts.tagExpression="@FieldExist"
- npm run wdio ./wdio.conf.js -- --cucumberOpts.tagExpression="@RequiredFields"
- npm run wdio ./wdio.conf.js -- --cucumberOpts.tagExpression="@RegisterOnEnter"
- npm run wdio ./wdio.conf.js -- --cucumberOpts.tagExpression="@Register"
- npm run wdio ./wdio.conf.js -- --cucumberOpts.tagExpression="@Validation"
- npm run wdio ./wdio.conf.js -- --cucumberOpts.tagExpression="@CheckBlankSpace"
- npm run wdio ./wdio.conf.js -- --cucumberOpts.tagExpression="@OprionalFields"
- npm run wdio ./wdio.conf.js -- --cucumberOpts.tagExpression="@EmailFormat"

#### Execute all senario in one go
- npm run wdio ./wdio.conf.js


### See Report
- npm run allure-report