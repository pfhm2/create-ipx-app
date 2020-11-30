# IPX Starter Project

A CLI tool to customize a starter IPX application.

This documentation covers how to use this project to customize an IPX through the source code. You should create an IPX before using this project; if you have not yet done so, see [Deploying an IPX Interface](https://docs.coveo.com/en/3160/build-a-search-ui/manage-coveo-in-product-experiences-ipx#deploying-an-ipx-interface-overview).

## Getting Started

1. Fork the repo and clone your local copy.
2. Install dependencies by running `npm i`.

## Configuration

You must add your IPX configuration inside the `config.json` file located at the root of your IPX project (e.g., `/create-ipx-app/config.json`) by filling in the values.

- `organizationId` : the id of the Coveo organization in which your IPX resides.

    You can find this id by navigating to the Administration Console and clicking the **Settings** gear in the upper-right corner. Under the **Organization** tab, select the **Information** menu. You'll see the **Organization ID** field.

- `pageId`: the id of your IPX.

    You can find this id by navigating to the [In-Product Experiences](https://platform.cloud.coveo.com/admin/#/search/in-app-widgets) page of the Administration Console. The `pageId` is the section of the **Script URL** between `.../pages/` and `/inappwidget/...`. For example, if the script URL were `https://platform.cloud.coveo.com/rest/organizations/examplecomtemporaryczokqt72c/pages/a6dcedcf-2f37-4b3a-9f3c-c8e484df4f79/inappwidget/loader`, the `pageId` would be `a6dcedcf-2f37-4b3a-9f3c-c8e484df4f79`.

- `pageName`: the name of your IPX.

- `apiKey` : An API key created in the Coveo Platform following [this documentation](https://docs.coveo.com/en/1718/manage-an-organization/manage-api-keys#add-an-api-key). You must grant this key the `Edit Search Pages` and `Execute Queries` privileges.

## Customize Your IPX

You can customize your IPX by editing the files locating under the `src` folder (e.g., `/create-ipx-app/src/`).

### ipx.html

This file contains the code required to display an IPX. It already includes all the basic functionalities to deliver a great content discovery experience.

This code is based on the [Coveo JavaScript Search Framework](https://docs.coveo.com/en/375/), which includes a wide variety of UI components. You can integrate those components or add your own code.

### ipx.css and ipx.js

These files are empty, but can be used to further customize your IPX integration.

## Try It Out

From your terminal, in the root directory of your IPX project, run the command `npm start`. It will start a node server and will load your newly created IPX on [http://localhost:8080/](http://localhost:8080/).

If you have properly configured `config.json`, your IPX will already be linked to your Coveo organization and will return documents based on the executed queries and your query pipeline configuration.

## Publish Your IPX

Once you are happy with your customized IPX, you can push the new code to the Coveo platform through our API by running `npm run publish` in the terminal in the root directory of your IPX project.

Now, your customized HTML, CSS, and JavaScript files will be used in your cloud-deployed IPX.

## More

Using this starter project, you can now manage multiple instances of IPX, each independently managed through version control. This lets you use as many different IPX as you'd like, bind them to different pipelines, and give them a different look and feel.

## Reference: Commands

- `npm start`: Starts the dev server.
- `npm run publish`: Synchronizes your IPX with the cloud.
- `npm run create:config`: Creates a config.json file.
