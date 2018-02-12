// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/cars',
  headers: [
    {id: 1, name: 'Id'},
    {id: 2, name: 'Name'},
    {id: 3, name: 'Color'},
    {id: 4, name: 'Max Speed'},
    {id: 5, name: 'Price'}
  ]
};
