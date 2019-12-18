## Currency Exchanger

An app that enables users to exchange currency between US dollar, British pound, and Euro based on prevailing exchange rate.

## Running the app

- The app uses [open exchange rates](https://openexchangerates.org/) API to get the latest exchange rate in every 10 seconds interval. Please sign up there and the api key will be provided.
- clone the repo.
- Create a `.env` file and put the api key there. View the `.env.sample` for the environment variable name.
- run `npm start`
- The app will be run at `localhost:3000`

## Running the test

- run `npm test` to run the suites

## Technology Used

- React
- Redux
- Redux-Saga
- Jest
- Material-UI with the `styled component` functionality.

_This app is scaffolded using create-react-app_
