// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import nconf from "nconf";

/*
 * Define the default constructor
 */
let Config = function() {

  // Define the variables to use
  let environment = undefined;

  // Get the argument-value to use
  nconf.argv().env("_");
  environment = nconf.get("NODE:ENV") || "development";

  // Load the configuration-values
  // user specified config override
  if (nconf.get("conf")) {
    nconf.file('customConfigOverride', nconf.get('conf'));
  }

  // environment override
  if (environment) {
    // appRoot is a global var - set in server.cofee
    nconf.file('environmentOverride', appRoot + '/config/' + environment + '.json');
  }

  // load the default config file
  // appRoot is a global var - set in server.cofee
  nconf.file('default', appRoot + '/config/default.json');
  
  // Return the result
};

/*
 * This function return the value that was set in the key-value store
 */
Config.prototype.get = key => nconf.get(key);

/*
 * This function constructs a new instanse of this class
 */
export default new Config();
