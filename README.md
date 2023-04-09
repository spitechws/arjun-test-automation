# Switch Environment

#### To Run automation on local enviroment

- export ENV=local

#### To Run in live environment

- export ENV=live

### Run Specific Case Example : @case1 @case2 ....@case8 

- run wdio ./wdio.conf.js -- --cucumberOpts.tagExpression="@case1"
