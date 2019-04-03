#!/bin/bash
profile_name=default
results_path=results.json

mask='password|key|token'          # if you want to mask any other environment variables, add them here
revision=$(git rev-parse HEAD)     # use your build server's variable here if you prefer (e.g. bamboo.planRepository.revision)
[[ -f $results_path ]] || (echo "No results found at '$results_path'" && exit 1)
env | \
  grep --extended-regexp --ignore-case --invert-match "^.*(${mask}).*=" | \
  curl \
    --fail \
    --request POST \
    --form env=@- \
    --form "profileName=${profile_name}" \
    --form "payload=@${results_path};type=application/x.cucumber.js.results+json" \
    "https://4ff6aa803b74ba9395869eaf9fcd2058f6a@jam.cucumber.io/tests/results/pump-up-the-jam/$revision"