# RENGO UI KIT

## Work on development

### You can use the example project to work on the UI Kit or use the Storybook to work on the components.

#### To run the example project:
```bash
yarn setup
```
#### Wait for the setup to finish and run:
```bash
yarn run install-react-example
```

Open the example project on the browser.

### To link the UI Kit and install on other projects:
#### We need to run the following commands:
1 - Link the UI Kit (Only once):
```bash
yarn link
```
2 - Install package from local running this command on the project you want to install. You need to review the path to the UI Kit folder.
```bash
yarn add rengo-ui-kit@file:../../myfolder/Rengo-UI-Kit
```
## Other preconditions: 
 - Review the console to see if there are any errors before execute next steps ( library generation are working OK).
 - You need to stop the watcher / scripts running on the UI Kit.
 - Delete the node_modules folder and the yarn.lock file.

