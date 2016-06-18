import Ember from 'ember';

export default Ember.Component.extend({
    updateGameForm: false,
    actions: {
        updateGameForm() {
            this.set('updateGameForm', true);
        },
        updateGame(game) {
            var params = {
                gameName: this.get('gameName'),
                gameGenre: this.get('gameGenre'),
                gameDeveloper: this.get('gameDeveloper'),
                gameYear: this.get('gameYear'),
                imgURL: this.get('imgURL'),
                gameDescription: this.get('gameDescription'),
            };
            this.set('updateGameForm', false);
            this.sendAction('updateGame', game, params);
        },
    }
});
