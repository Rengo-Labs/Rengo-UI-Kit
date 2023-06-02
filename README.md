# RENGO UI KIT

## Install the project
#### Run:
```bash
yarn install
```

## Work on development

#### Create the components on the components folder.  
Review the type of this new component because we use atomic design (atoms and molecules).  
The atoms have a single responsibility and the molecules have more than one atom.  
For example: One button is an atom and the button with icon is a molecule.

##### Example Structure of the component:
```bash
- Button
  - index.tsx
  - styles.ts
  - types.ts - (Optional)
```
#### Create the stories on the stories folder.
Follow the same structure of the components folder, create a folder with the name of the component and create the stories inside this folder.

##### Example Structure of the story:
```bash
- Button
  - Button.stories.tsx
```
Review the stories to see how to use the component.

### You can use the Storybook to work on the components.

#### To run the storybook project:
This command will open the storybook on the browser.
```bash
yarn run storybook 
```

##### Export the component on the index.tsx file.
On every folder of the components we have a index.tsx file.  
You need to follow the same structure of the other components.

##### Import and export on src/index.tsx file.
This is the main file of the library.  
If the component is not exported on this file, the component will not be available on the library.

### FIRST OPTION: Work on the UI Kit locally and install on other project locally.

### To link the UI Kit and install on other projects:
#### We need to run the following commands:
##### Link the UI Kit (Only once):
```bash
yarn link
```
##### Install package from local running this command on the project you want to install. You need to review the path to the UI Kit folder.
```bash
yarn add rengo-ui-kit@file:../../myfolder/Rengo-UI-Kit
```

##### OR change the package.json file of the project and add the following line:
```bash
"rengo-ui-kit": "file:../../myfolder/Rengo-UI-Kit"
```
***If you're working on local, on the project to you install this UIKit needs to review the node_modules folder and delete all the dependencies on the folder rengo-ui-kit folder.***

##### The default path for the UiKit is: 
```bash
"rengo-ui-kit": "https://github.com/Rengo-Labs/Rengo-UI-Kit.git#feat/lib-integration"
```
### SECOND OPTION: Work on the UI Kit locally and install from GITHUB the UI Kit.

##### Checkout from the **develop** branch to **feat/lib-integration**

##### Run the command to generate the library.
This command will generate the library on the **lib** folder.
```bash
yarn run build:compile
```
##### Commit and push the changes to the **feat/lib-integration** branch.

##### On the project you want to install the UI Kit, you need to run the following command:
```bash
yarn install
```
## Other preconditions: 
 - Review the console to see if there are any errors before execute next steps ( library generation are working OK).
 - You need to stop the watcher / scripts running on the UI Kit.
 - Delete the node_modules folder and the yarn.lock file and made a clean installation.

## Authors
- [Rengo Labs]()
