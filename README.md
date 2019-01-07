# Parcel Vue Demo    

A Vue demo including Code Splitting, Hot Reloading, ESLint, Vuex, Vue Router and Less.

## :fire: Get Started

```bash
git clone git@github.com:proYang/vue-parcel-demo.git
cd vue-parcel-demo
npm install
# or
yarn install
```

## :building_construction: Development

```bash
npm run dev
# or
yarn dev
```
the application opened `http://127.0.0.1:1234` in the browser default.

## :rocket: Build

```bash
npm run build
# or
yarn build
```
the default output directory is `/dist`. You can change the destination in `package.json`.

## :bento: Code Linting

```bash
npm run lint
# or
yarn lint
```
Linting your code by ESLint.    

Edit `.eslintrc.js` file to configure rules.
See: 
- [http://eslint.org/docs/user-guide/configuring](http://eslint.org/docs/user-guide/configuring)    
- [https://github.com/vuejs/eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) 

# :package: Other Config
If you want to use other configs( port, public-url, out-dir... ), see the [Parcel official documentation](https://parceljs.org/) or submit the Issue.



# We need to talk

This repository is intended to help ColdFusion developers getting started with VueJS development. A little bit of bashing NodeJS will follow. If you are not a ColdFusion developer, this may not be particularly helpful.

## Here goes
We need to talk about how great ColdFusion development is. One of the places it shines is that Adobe takes care of almost all the java integration needs in ColdFusion. Look at all these jar files. Would you want to figure how they are supposed to work together? If you were a JSF developer you would have to do that. I will tell you what would happen. You would not bring in everything. There would be features you not tap into because getting it to work is a chore.

Consider this. If I wanted to create a scheduled task taht FTP down an Excel Spreadsheet, read off the data into a table. Join that data to an SQL Server database and Oracle database and then create a PDF that first gets zipped, then will get mailed off, you can do that. It is all built in. We can bridge the gap between so many different kinds of systems so quickly. That is power.

## Other technologies

With other technologies, the pace and the granularity, is much smaller. In a previous video I was talking about how I have 5 or 6 javascript files and that was getting bit much. We are now shifting approaches, massively. We are now going into the NodeJS, NPM, and ParcelJS world and how we deal with things is very different. What we are dealing with is much more fine grained. It is even more fine grained than `.jar` files. Let's simplify things. I am not going to talk about `.jar` or any java concept.


# Introduction

## Introduction to NodeJS

NodeJS is a low level server side Javascript Engine. You can download it here:

- https://nodejs.org

You have got to have it, and you will seldom interact with it directly

## Introduction to NPM (Node Package Manager)

You can download NPM here:

- https://www.npmjs.com/

This is a combination of a bunch things.

1. It is a command line interface brings in NodeJS package
2. It is a repository a bazillion packages. Keep in mind these packages are very low level
3. Because there are so many packages, it is really, really useful that NPM figures out the dependances 99.99% of the time

Let me talk about the dependancy tree. I really want only about 10 javascript files. But by the time the whole depenancy tree is resolved, there will be 10,000s of packages involved. Did I mention that 99.99% of the time npm figures thing out? That last 0.01% is painful. There is no ColdFusion equivalent to that. We are going to be talking more about NPM later. Let me just move on to the next one


## Introduction to ParcelJS

ParcelJS is an almost zero configation bundler. It can be downloaded here:

- https://parceljs.org/

1. It will take those 10,000s of javascript files and bundle them into an application
2. It will serve that application so that we can debug it.

So what does it mean to "bundle"? Let me give the really short but mostly complete answer.

When we were linking in all the Javascript files, we were really asking the browser to initiate separate downloads and figure out how to make everything work together. A better approach would be to process the files long before the browser sees them. I want to do a bunch  of things with these files. In no particular order

- I want to concatinate them. I want as few file as possible
- I want to know that they will work together.
- I want tight control over how they work together
- I want to know if something is going to break now
- I want to program in a language that is more expressive than Javascript

### Running our site

If we did everything right, we can run the site in debug mode. Type in

`npm run dev`


By the way, if you go to ParcelJS's website, it will suggest `parcel index.html`. But that won't work. If you want to try something similar to that, you can `parcel ./public/index.html`


### Rant

I didn't know I wanted these things until I saw the benefit of having them. After I learned NodeJS, NPM, and ParcelJS, do I have a development environment a clean as Adobe ColdFusion? No, it is not even close. BUT... By dividing client side developement from server side developement, we can make both better. IMHO, that more than makes up complexities associated with this kind of development.

# Code Review

## `package.json`

We are starting with `package.json` . Most of this is boilerplate that people smarter than I came up with. Let me look at what I care about

Line 17 has FontAwesome
Line 19 has Axios
Line 21 has Bootstrap Vue
Line 23 is VueJS proper
Line 25 is Vue Router. We need to properly toggle though our pages
Line 26 is Vue Select. This will make our pulldown menus smarter
Line 27 is Vue Trix. Trix is a really basic WYSIWYG editor. It is good to have that
Line 28 is Vuex. It handle variables that are shared across "pages". OK they are not pages, but we will get to that
Line 41 has typescript. We will not be programming in Javascript, we have something better.


So what is going to happend with all this?

When I type `npm install`, it is going to pull in all of these and more importantly all of their depenancies. The results of that are going to end up in two places

- `node_modules/` directory
- `package-lock.json` file

`npm install` also reports any concerns it might have. That is when the brain surgery starts. I am not going to be going over brain surgery today. At the time of this video, the install process was clean.

## `src/main.ts`

The next file we are going to work with is `src/main.ts`. Let me get a little side tracked. In ColdFusion, when we want to have a separate file be included we just use

`<cfinclude template="external.cfm">`

All the variables go in. The included file can tinker with variables to its heart's content. Hopefully, processing can still continue because all the variables are in a consistant state. If you want to have more control over the variables, you can use `<cfmodule>` or make a function or call a function in a `.cfc`. We have ways to control changes.

In NodeJS, we are going to do this every differently. For the sake of simplicity, just assume that you are going to have to perform 3 operations to share code.

1. `export` (Not shown)
2. `import`
3. actually use it. (I don't use as in the use function, I mean just use it)

Back to our code...

Line 1: Got to have `vue`. `vue` in quotes referes to `node_modules/vue`. Vue in caps is variable that we can use. `import` does not always use a variable.

Line 7 and 8: We are not just importing the `bootstrap-vue`. `Vue.use()` makes it available in all of our vue code. BootstrapVue is a bunch of custom tags. Use allows all of them to be used.

Compare this to Line 10 and 11. We are still importing code, but `vue-select` is much smaller. `Vue.component` is going to get us only one new custom tag, `v-select`. We can use it any of our views.

Line 13 is where our code is going to be. When we get into what the application does, this is where we will implement it.

Line 14 is where we will bring how we want pages to be routed.

Line 15 `store` is where we bring in Vuex stuff. Vuex is used to share variables across pages.


### CSS
All this work we have done was all for JavaScript/TypeScript. We now moving to CSS area.

Line 18 is plan Bootstrap
Line 19 is where Bootstrap Vue add its stuff.
Line 20 is where FontAwesome comes in. If you look in `node_modules`, you will see that the directory really starts with and `@`. I think this is allow for subpackages.

These paths go all the way in, which is different from JavaScript/TypeScript. We also never set a variable.

Let me talk about line 22. I don't know what it does, but I am leaving it.

Line 25: It has been a while since we have seen `new Vue`. I know it looks different from how we previously did `new Vue`. It is using router, store and App that we created above. `#app` comes from the html. It is similar to `el`.

## Let's look at that HTML

In `public/index.html` we see some very small HTML. This file editable within certain limits.

If you have static HTML that needs to shown if Javascript and CSS don't want to work, it goes here. This one has nothing in between the body tags. This will be very blank. So why would you put content here? When search engines see your site, they don't have anything to index. You might want to add content because of that.

Let's do a before and after. After is on the left. Before is on the right. Parcel during its build process, Put in a new favicon and CSS. Where we once had `../src/main.ts`, we now `main.js`. 

## `src/App.vue`

Moving on to our next file `./src/App.vue`

This is a layout file. It is the last to get processed because it brings in everything that has been built up until this point. Whenever I see a `.vue` file, I expect there to be a `<template>` tag. In this context, think of `<template>` as the block of HTML that will be used.

All of the `b-` tags come from Bootstrap Vue. Way down on line 22 we have `<router-view />`. This is where were transition out of the layout and into the individual views. Sometime I wish code would have a big tada next to it. Why did I even want to migrate my development to NodeJS, NPM, and ParcelJS? I wanted to divided my front end code and make its content modular. This is where they come together. As I look at `<router-view />`, I notice there is no business logic or references or anything that suggests it does anything.

## `src/router.ts`

Let's go to `src/router.ts`.




# Resources

- https://github.com/hanhdt/vue-trix
- https://sagalbot.github.io/vue-select/docs/