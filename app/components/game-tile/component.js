import Ember from 'ember';

export default Ember.Component.extend({
  favoriteGames: Ember.inject.service(),
  actions: {
    addToFavorites(item) {
      this.get('favoriteGames').add(item);
    },
  }
});
