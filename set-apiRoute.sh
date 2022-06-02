
INGRESS_DOMAIN="http://probes-project01."`oc get ingresses.config/cluster -o template --template='{{ .spec.domain }}'`

echo "var apiRoute:string = '${INGRESS_DOMAIN}';
      export const environment = {
        production: false,
        backendURL:  apiRoute,
        userListURL: apiRoute + '/api/person/all',
        userAddURL:  apiRoute + '/api/person/add'
      };" > ./src/environments/environment.ts

