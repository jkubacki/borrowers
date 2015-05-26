import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //this.route('friends');
  this.resource('friends', function() { });
  this.route('friends', function() {
    this.route('new');

    this.route('show', {
      path: ':friend_id'
    });

    this.route('edit', {
      path: ':friend_id/edit'
    });
  });
});

export default Router;
