export const environment = {
  production: true,
  apiBase: 'https://deltaprop.herokuapp.com/',
  auth0: {
    url: 'project-bookmark.us', // the auth0 domain prefix
    audience: 'http://localhost:5000', // the audience set for the auth0 app
    clientId: 'gmdRc7yb4eUpme3tXN2R8r67LVjSVPUw', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:4200/list', // the base url of the running ionic application.
  }
};
