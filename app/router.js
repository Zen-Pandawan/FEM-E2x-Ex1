import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('orgs', function() {});

  this.route('org', {path: 'org/:id'}, function() {
    this.route('repos');
    this.route('repo', {path: ':repoid'}, function() {
      this.route('contributors');
      this.route('issues');
    });
    
  });

  //404 Default
  this.route('not-found', { path: '/*path'});
});

export default Router;
