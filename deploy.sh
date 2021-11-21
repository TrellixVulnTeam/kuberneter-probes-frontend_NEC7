
oc delete all --selector app=angular-frontend

oc new-build --name angular-frontend --binary --strategy docker
oc start-build angular-frontend --from-dir=.
oc new-app angular-frontend
oc expose service/angular-frontend

oc label deployment/angular-frontend app.kubernetes.io/part-of=ANGULAR_DEMO_APP --overwrite
oc label deployment/angular-frontend app.openshift.io/runtime=quarkus --overwrite

echo
echo "Try now to hit your angular frontend at:"
echo
echo "   http://"`oc get route angular-frontend -o template --template='{{ .spec.host }}'`
echo

