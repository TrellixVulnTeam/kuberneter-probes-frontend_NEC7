//* This environment file has being generated by set-apiRoute.sh script at:  Wed Nov 2 12:42:32 CET 2022
 
var apiRoute:string = 'http://probes-project01.apps.ocp4-jk5q7-ipi.azure.opentlc.com';
      export const environment = {
        production: false,
        backendURL:  apiRoute,
        userListURL: apiRoute + '/api/person/all',
        userAddURL:  apiRoute + '/api/person/add'
      };
