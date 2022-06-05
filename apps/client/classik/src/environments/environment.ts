// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    endpoint: 'http://cloud.docker.localhost/api',    
  },
  azure: {
    start: 'https://management.azure.com/subscriptions/'+ '6f5c044b-fb7c-4159-a16d-2308984a36a7' + '/resourceGroups/'+ 'cloudProject' + '/providers/Microsoft.Compute/virtualMachines/'+ 'cloud-gaming-de' +'/start?api-version=2022-03-01'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
