<div align="center">
  <a href="https://asos-webstore.netlify.app" target="_blank">
    <img src="https://user-images.githubusercontent.com/86098273/198705692-a6b402c8-c48f-4871-bc55-a153e467ba03.png" alt="Logo" width="300">
  </a>
  <br />
  <h3>ASOS</h3>
  <br />
  [<a href="https://asos-webstore.netlify.app" target="_blank">See Apps</a>]
</div>

<div style="margin-top: 40px;">
  <h3>ASOS Store</h3>
  <span style="font-size: 18px">Discover Fashion Online</span>
  <p style="margin-top: 18px;">Discover the latest fashion trends with ASOS. Shop the new collection of clothing, footwear, accessories, beauty products and more. Order today from ASOS.</p>
  <b>This project is used for case studies not for commercialization.</b>
  <p>Where do I get the ASOS API? I got the API from the following link: <a href="https://rapidapi.com/apidojo/api/asos2">Asos API</a></p>
</div>
<br />
<br />

#### FOLDER STRUCTURE IN THIS PROJECT

```
+ .husky
+ .vscode
+ public
+ src
  + assets (Contains assets like icons, illustrations, styles global & images)
  + components (Contains reusable component)
  + constants (Defining data static like: route path, size)
  + hooks (General hooks functions. ex: useDisclosure, useDebounce, etc)
  + layouts (Contains template UI)
  + modules (Contains hooks, service, models)
    + hooks (hooks per module)
    + service (Contains fetch api with axios per module)
    + model (Contains type or interface)
  + router (Contains configuration routes)
  + screens (Contains the content of a page)
    + index.tsx
    + xxx.module.scss
  + utils (Small function reusable)
```

## Build with

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJs v18.2.0](https://react.dev/blog/2022/03/29/react-v18)
- [React-Query](https://tanstack.com/query)
- [Axios](https://axios-http.com/docs/intro)
- [SASS](https://sass-lang.com/)

## Project setup

1. Clone this repository with SSH

```
  $ git clone git@github.com:GannaHup/asos-webstore.git
```

2. Create .env

3. Before your run this project: install all packages needed

```
  $ yarn ci
```

4. Run this project with command:

```
  $ yarn dev
```
