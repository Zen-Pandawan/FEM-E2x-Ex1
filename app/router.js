import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //LIST OF ORGS
  this.route('orgs', function() {});
  
  //INDIVIDUAL ORG
  this.route('org', {path: 'org/:id'}, function() {
    //LIST OF REPOS
    this.route('repos');

    //INDIVIDUAL REPO
    this.route('repo', {path: ':repoid'}, function() {
      this.route('contributors');
      this.route('issues');
    });

    this.route('notfound');
  });

  //404 Default
  this.route('not-found', { path: '/*path'});
});

export default Router;
