import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('orgs');

  this.route('org', function() {
    this.route('emberjs', function() {
      this.route('repos');
      this.route('ember.js', function() {
        this.route('issues');
        this.route('contributors');
      });
    });
  });
});

export default Router;
