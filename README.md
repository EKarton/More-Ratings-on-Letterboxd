# More Ratings on Letterboxd - Chrome Extension

### Description

Get IMDB, Rotten Tomatoes, and Metacritic ratings on Letterboxd! This project is a chrome extension that fetches and injects ratings from IMDB, Rotten Tomatoes, and Metacritic to [Letterboxd](https://letterboxd.com/). With this chrome extension, users will be able to see IMDB, Rotten Tomatoes, and Metacritic ratings on each film, right below Letterboxd's ratings:

<img src="./docs/images/screenshot.png"/>

You can also show / hide the ratings by clicking on the chrome extension:

<img src="./docs/images/popover.png"/>

The chrome extension is available on the Chrome Web store. Visit the [Chrome Web Store](https://chrome.google.com/webstore/detail/more-ratings-on-letterbox/daohigojkjlijcphfhelkcepldnenike?hl=en&authuser=0) to install this chrome extension on your browser.

### Getting Started:

#### Pre-requisites:

- Yarn
- Chromium browser (ex: Google Chrome, Edge)

#### Installation:

1. Clone this repository by running `git clone git@github.com:EKarton/More-Ratings-on-Letterboxd.git`

2. Install dependencies by running `yarn install`

3. Create a `.secrets.js` file in the root folder of this project with this content:

   ```js
   export default {
     omdbApiKey: '<OMDB_API_KEY>',
   };
   ```

   where:

   - `<OMDB_API_KEY>` is your OMDB Api key. You can get a free one by filling out a form [here](https://www.omdbapi.com/apikey.aspx)

4. Build the chrome extension by running `yarn build`. Your built chrome extension will be in the `./dist` folder.

5. Load your chrome extension on your web browser

   1. If you are using [Edge](https://www.microsoft.com/en-us/edge), follow this [guide](docs/GettingStartedOnEdge.md)
   2. If you are using [Google Chrome](https://www.google.ca/chrome/), follow this [guide](docs/GettingStartedOnChrome.md)

6. Once you have loaded your chrome extension, go to https://letterboxd.com/film/spider-man/. It should show the ratings on the side of the page:
   <img src="./docs/images/final-result.png"/>

### Commonly used scripts:

| Scripts         | Description                                     |
| --------------- | ----------------------------------------------- |
| `yarn clean`    | Cleans out the `dist` and `node_modules` folder |
| `yarn install`  | Installs dependencies                           |
| `yarn build`    | Builds and minifies the chrome extension        |
| `yarn lint`     | Checks the formatting and linting of files      |
| `yarn lint:fix` | Fixes the formatting and linting of files       |
| `yarn test`     | Runs unit tests                                 |

### Next Steps

- [x] Publish to the Chrome web store
- [x] Add popup to enable / disable injecting ratings on Letterboxd
- [ ] Add unit tests
- [ ] Set up CI/CD pipeline for checking PRs and automatically deploy to the Chrome web store

### Usage

Please note that this project is used for educational purposes and is not intended to be used commercially. We are not liable for any damages/changes done by this project.

### Author

Emilio Kartono

Icons were made by [Freepik](https://www.freepik.com) from www.flaticon.com.

### License

This project is protected under the MIT licence. Please refer to the [LICENSE.txt](LICENSE.txt) for more information.
