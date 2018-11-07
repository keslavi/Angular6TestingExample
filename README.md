# Angular6TestingExample
Testing Example for Angular 6 comparing Karma, Jest and eventually showing e2e.

a few interesting things: 

to add a quick, real, backend, koa is used.  check it out in /server.  
you'll want it running to view the angular app outside of testing: 
    cd server
    npm start

to avoid CORS issues a reference is added to angular.json and the file proxy.conf.json is added.  you don't have to play browser or backend games!

There are two branches in this repository: 
* karma: tests built and run using karma
* jest: test runner converted to jest, which has a superset language for jasmine.  usually, you won't notice. 
  * note that jest checks on file changes and runs ONLY the appropriate test!
  
# use the pull requests to view the code changes between karma and jest



#Setup 
start up at least 3 terminal windows

* T1: (koa server)
    > cd /server
    > npm start

* T2: normal angular-cli
    >npm start     (will run ng-serve, navigate to http://localhost:4200

* T3: test runner window:
  * karma branch: npm test
  * jest branch: npm test or npm run test:watch
    * note npm run test:ci would be for continuous integration
