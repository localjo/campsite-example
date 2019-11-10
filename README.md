# Campsite Sample App

A simple demo app that shows the features of a camp site, built for an interview with a hospitality company.

The instructions were to build a camp site listing page and use `camp_features.json` as if it were returned by an API and use it to build a `<ul>` list that visually shows whether or not a campground has each feature. And clicking on a feature should expand the list to show subfeatures. Changes to `camp_features.json` are automatically reflected in the app.

I also added a button that simulates showing the next campsite, as if that data were also coming from an API. I also added some unit tests to this demo.

## Installation

```
git clone git@github.com:localjo/campsite-example.git
cd campsite-example
npm install
```

## Usage

Start the app locally and open it in a browser
```
npm start
```

## Tests

Run tests in watch mode
```
npm test
```

Run test coverage report
```
npm run coverage
```
