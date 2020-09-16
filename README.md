# create-ipx-app

A cli tool to create a starter IPX application.


## Getting started

1. Clone the repo: `https://github.com/coveooss/create-ipx-app.git`
2. Install dependencies: `npm i`
3. Add your IPX configuration inside `config.json`.

    **Note**: the API key must have both `Edit Search Pages` and `Execute Queries` privileges.


## Workflow

1. Start the dev server by running `npm start`.
2. Make changes to the html, css and js files in the `src` directory.
3. Publish your changes to the cloud by running `npm run publish`.


## Commands

- `npm start`: Starts the dev server.
- `npm run publish`: Synchronizes your IPX with the cloud.
