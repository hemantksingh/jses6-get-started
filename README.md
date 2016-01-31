A sample app leveraging the ECMAScript 6 Features.

##Running the app##

`npm run start`

This compiles the ES6 modules into ES5 and then runs the app. However,if you have babel-node installed, `babel-node index.js` compiles and runs the app on the fly. We are using *Gulp* as the build tool therefore the app defines a `gulpfile.babel.js` to define build and test tasks.  We use *Babel* compiler in order to compile ES2015 to ES5. This allows us to use the ES6 syntax, right now without waiting for ES6 support.

**Sourcemaps** plugin maps the compiled JS/CSS to source JS/CSS to fully track selectors and rules back to its very origin in your debugger.


##Running tests ##

`npm run test`
