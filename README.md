# nextjs-site
Building out a personal site with nextjs

I'm planning on replacing PeacockWeb.net with this site once my subscription is up. I'm using React through Next.js, 
which you can learn about here:
`https://github.com/zeit/next.js/`


# Setting up

`cd` into the directory and run `npm install`.

Then, run `npm run dev` to get the project running locally in development mode. 

Open up your browser to `http://localhost:3000/` to visit the site.

Any time you save a file in the project, it will automatically update the site with your changes. 

# Adding stuff

To add a page, add a file with the name of your page to the `pages` directory. Follow the structure of index.js or something to get your basic page template going.

To link within the app, you'll need to import a `<Link/>` component and drop your anchor within it. `Link`s can contain any element that has an onClick listener to link to another page. 

You'll have to use relative pathing to import components and whatnot. Look at other pages to get an idea of how that works. 

# Sharing your changes

Once you've made your changes, make sure you're on a new git branch (`git checkout <your-branch-name>`)

Stage your changes `git add .`

Commit your changes `git commit -m "<explain your changes>"`

Push them up to GitHub `git push -u origin <your-branch-name>`

Then, submit a pull request.


# Deploying to production

If you want to deploy, you'll need to use Now.js. 

`npm install -g now`

Once now is installed, run `now --login`. You'll need to enter my gmail address, and let me know via slack to confirm your login token. 

Once I've set you up, you can run `npm run build` to build the latest version of production. 

Then, run `now` to deploy to production. 




a 