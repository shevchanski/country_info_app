# the Country Info App

All applications are written with **_TypeScript_**

## Get started

To use these apps, first of all you need to clone that repository.<br>To do that run the next command:
<br>

```bash
# clone GitHub repo
git clone git@github.com:shevchanski/country_info_app.git

# go to dir
cd country_info_app
```

---

### Front-end

**Tech Stack:**

- React
- TypeScript

**Instruction**

First of all, if you are in the directory with app `frontend`, you need to install dependencies:

```bash
# go to 'frontend' dir, if you are still not there
cd frontend

# install all dependencies
npm i
# or
npm install
```

For development and real-time applying changes, use next command:
<br>
`npm run dev`

To build a React application run next commands:
`npm run build`

After you built that app, you can test it localy:<br>
`npm run preview`

> [IMPORTANT] <br>
> It is not recommended to use that way for production. <br>
> Check information under the next link to find out how to deploy with different platforms. [Deploy](https://vite.dev/guide/static-deploy.html)

---

### Back-end

**Tech Stack:**

- Node.js
- Express.js
- TypeScript

**Instruction**

First of all, if you are in the directory with app `frontend`, you need to install dependencies:

```bash
# go to 'frontend' dir, if you are still not there
cd backend

# install all dependencies
npm i
# or
npm install

npm run i:prod  # install dependencies omiting devDependencies.
# BUT if you need to build an app, use `npm i` instead
```

For development and real-time applying changes, use next command:
<br>
`npm run start:dev`(uses `tsx` to run TS in Node.js without compiling)

Build Express.js application:
<br>
`npm run build`

After you built that app, you can test it localy:
<br>
`npm run start`

`.env`-file stores the next variables:

<!-- `bash` is used only to enalbe comment's syntax -->

```bash
API_PORT=3000 # defined wich port will be used for listening for requejjsts
NAGER_API_URL=https://date.nager.at/api/v3 # stores nager-api url
```
