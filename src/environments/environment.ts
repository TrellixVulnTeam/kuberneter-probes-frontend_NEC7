//* This environment file has being generated by set-apiRoute.sh script at:  Sat Nov 5 20:40:33 CET 2022
 
var apiRoute:string = 'http://acme-api-rozdzielnia.apps.shared-na46.openshift.opentlc.com';
      export const environment = {
        production: false,
        backendURL:  apiRoute,
        userListURL: apiRoute + '/api/person/all',
        userAddURL:  apiRoute + '/api/person/add'
      };
