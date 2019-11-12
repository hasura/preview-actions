## Getting started

1. Install the dev build of the CLI for your machine from `cli/`

```
mv cli/cli-hasura-<arch> /usr/local/bin/hasura-dev
chmod +x /usr/local/bin/hasura-dev
```

2. Run hasura + postgres

```
docker-compose up -d
```

3. Run the API that has our custom business logic

```
cd functions/createUser
npm i
npm start
```

4. (For linux only) Change the service endpoint of the graphql service depending on your platform
   in the migrations directory

```
# Edit the file with your favorite editor and set the right ip for your service
vim hasura/migrations/1573548558758_create_action_createUser/up.yaml
```

5. Apply migrations to create the action
```
cd hasura
hasura-dev migrate apply
```

6. *Synchronous*: Open the hasura console and try the mutation!
```
hasura-dev console
```

7. *Asynchronous*: To try the async mutation try the following

```
# Rollback last migration
hasura-dev migrate apply --down 1

# Change "kind: asynchronous" in migration
vim hasura/migrations/1573548558758_create_action_createUser/up.yaml

# Apply the new migration
hasura-dev migration apply

# Add a delay to the action function to make it deliberately slow
vim functions/createUser/index.js

# Restart the function
cd functions/createUser
npm start

# Try out the mutation!
hasura-dev console
```
