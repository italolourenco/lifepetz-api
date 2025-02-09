#!/bin/bash

set -o errexit

readonly REQUIRED_ENV_VARS=(
  "POSTGRES_USERNAME"
  "POSTGRES_PASSWORD"
  "POSTGRES_DATABASE"
  "POSTGRES_USER")

main() {
  check_envVars
  create_db
}

check_envVars() {
  for required_env_var in ${REQUIRED_ENV_VARS[@]}; do
    if [[ -z "${!required_env_var}" ]]; then
      echo "Error:
    Environment variable '$required_env_var' not set.
    Make sure you have the following environment variables set:
      ${REQUIRED_ENV_VARS[@]}
Aborting."
      exit 1
    fi
  done
}

create_db() {
  psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
     CREATE DATABASE $POSTGRES_DATABASE;
     GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DATABASE TO $POSTGRES_USERNAME;
EOSQL
}

main "$@"