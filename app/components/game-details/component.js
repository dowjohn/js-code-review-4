import Ember from 'ember';

export default Ember.Component.extend({
    genreName: Ember.computed('game.gameName', 'game.gameGenre', 'game.gameDeveloper', 'game.gameYear', function() {
        return this.get('game.gameName') + ' | ' + this.get('game.gameGenre') + ' | ' + this.get('game.gameDeveloper') + ' | ' + this.get('game.gameYear');
    }),
});
