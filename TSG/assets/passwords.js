/**
 * Client Portal Authentication
 * Keep this file secure and don't commit to public repositories
 */

// Client authentication data - Client ID is the password
const clientData = (function() {
  const encoded = {
    "wms41193": ["Admin Dashboard", "Y2xpZW50LWFkbWlu"],
    "pms2752": ["Admin Dashboard", "Y2xpZW50LWFkbWlu"],
    "acf7428": ["Alabama Coastal Foundation", "YWNmLTc0Mjg="],
    "arc2214": ["Baldwin ARC", "YXJjLTIyMTQ="],
    "ccc9007": ["Community Connect CDC", "Y2NjLTkwMDc="],
    "csvr6048": ["CSVR", "Y3N2ci02MDQ4"],
    "dfg5391": ["Destined for Greatness", "ZGZnLTUzOTE="],
    "loc9157": ["LOC", "bG9jLTkxNTc="],
    "lov4836": ["LOV", "bG92LTQ4MzY="],
    "lth9396": ["The Lighthouse", "bHRoLTkzOTY="],
    "mbe3603": ["Mobile Bay Enthusiasm", "bWJlLTM2MDM="],
    "mla2051": ["MercyLife of Alabama", "bWxhLTIwNTE="],
    "sans6183": ["South Alabama Nonprofit Summit", "c2Fucy02MTgz"],
    "stp9906": ["The Steeple", "c3RwLTk5MDY="],
    "tkg7869": ["TU-CSLA Project", "dGtnLTc4Njk="]
  };
  
  const decoded = {};
  for (const [key, values] of Object.entries(encoded)) {
    decoded[key] = {
      name: values[0],
      page: atob(values[1])
    };
  }
  return decoded;
})();

/**
 * Validate client credentials - Client ID is the authentication
 * @param {string} clientId - Client ID entered by user
 * @returns {boolean} - True if client ID exists
 */
function validateClientCredentials(clientId) {
  return clientData.hasOwnProperty(clientId.toLowerCase());
}

/**
 * Get client page name for redirection
 * @param {string} clientId - Valid client ID
 * @returns {string} - Page name for redirection
 */
function getClientPage(clientId) {
  const client = clientData[clientId.toLowerCase()];
  return client ? client.page : null;
}

/**
 * Get client name for personalization
 * @param {string} clientId - Valid client ID
 * @returns {string} - Client organization name
 */
function getClientName(clientId) {
  const client = clientData[clientId.toLowerCase()];
  return client ? client.name : null;
}

/**
 * Add new client (for administrative use)
 * @param {string} clientId - New client ID
 * @param {string} clientName - Organization name
 * @param {string} pageName - Dashboard page name (without .html)
 */
function addNewClient(clientId, clientName, pageName) {
  const encodedPage = btoa(pageName);
  console.log(`Add this to passwords.js:`);
  console.log(`"${clientId}": ["${clientName}", "${encodedPage}"],`);
}

console.log('%cTSG Client Portal Security Active', 'color: blue; font-size: 14px;');