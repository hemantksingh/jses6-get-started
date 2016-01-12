A sample app leveraging the ECMAScript 6 Features.

##Building the app##

We are using *Gulp* as the build tool therefore the app defines a `gulpfile.js` to define build and test tasks. In order to build the app use `npm run build`. We use *Babel* compiler in order to compile ES2015 to ES5. This allows us to use the ES6 syntax, right now without waiting for browser support.

**Sourcemaps** plugin maps the compiled JS/CSS to source JS/CSS to fully track selectors and rules back to its very origin in your debugger.


##Running the app##

TO run the app locally `babel node index.js`. This compiles and runs the app on the fly.