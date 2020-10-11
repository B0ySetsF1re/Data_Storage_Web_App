# Data Storage Web App Client
Simple data storage web client application using micro-services architecture

## NPM and Angular install/config

Before cloning the repository, please make sure you have Node.js, NPM and Angular CLI installed! Here are some snippets:

* Check out this **[link](https://nodejs.org/en/)** to install **Node.js** and **NPM**.
* **[Official docs](https://angular.io/guide/setup-local)** on how to install Angular CLI

#### Note! The app won't work if you don't have [data storage server](https://github.com/B0ySetsF1re/data-storage-web-app-server) configured and running!

## Cloning the repository

Make sure you have the git utility installed on your computer. Check out **[this](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)** article on how to set it up.

Here are the steps on how to clone and configure the repository:

* Cloning repository:

  ```bash
  git clone https://github.com/B0ySetsF1re/data-storage-web-app-client.git
  ```
* Then in the terminal navigate to the project's folder using **cd** command to install dependencies etc.

* Installing dependencies

  ```bash
  npm install
  ```
* Running the web app

  ```bash
  ng serve --open
  ```
You can also use **[nodemon](https://www.npmjs.com/package/nodemon)** package, so that you wouldn't need to manually restart the server each time you apply some changes.

* If you would like to install additional package/dependency for the app, you can do it as following:

  ```bash
  npm install <package_name> --save
  ```
* To install additional external libraries:

  ```bash
  ng add <library name>
  ```
Read more about ng command here: **[CLI Overview and Command Reference](https://angular.io/cli#cli-overview-and-command-reference)**

## Setting up environment variables
After cloning the repository, **you need to configure the environment variables for API configuration. Otherwise the app won't even run**. Locate **_src/environments_** folder in the project's root and create two files: **_environment.ts_** and **_environment.prod.ts_**. You can take basic configurations below:

```typescript
// environment.ts
export const environment = {
  production: false,
  API_URL: 'http://localhost:3000/api/data-storage',
  API_GET: {
    meta_data_content: "/meta-data-content",
    files_stats: "/files-stats",
    download_file: "/download-file/"
  },
  API_POST: {
    upload_file: "/upload-file",
    rename_uploaded_file: "/rename-uploaded-file/",
    delete_uploaded_file: "/delete-uploaded-file/",
    delete_all_uploaded_files: "/delete-all-uploaded-files/",
    delete_selected_uploaded_files: "/delete-selected-uploaded-files/"
  }
};
```

```typescript
//environment.prod.ts
export const environment = {
  production: true
};

```

This **_config_** can be changed by your needs.

To change port or host, take a look at **_angular.json_** file and check the following parameters:

```json
{
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "projects": {
        "data-storage-web-app-client": {
            "architect": {
                "serve": {
                    "options": {
                        "port": 3001
                    }
                }
            }
        }
    }
}
```
**You don't need to change here anything, the client will be running locally by default.**

For **_prod_** deployment check out the Angular's official docs: **[Configuring application environments](https://angular.io/guide/build#configuring-application-environments)**

###### Once you have all the configurations done, especially the server - the app should run and work just fine.
