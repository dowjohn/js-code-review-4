import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        saveGame() {
            var params = {
                gameName: this.get('gameName'),
                gameGenre: this.get('gameGenre'),
                gameDeveloper: this.get('gameDeveloper'),
                gameYear: this.get('gameYear'),
                imgURL: this.get('imgURL'),
                gameDescription: this.get('gameDescription'),
            };
            this.sendAction('saveGame', params);
            this.set('gameName', '');
            this.set('gameGenre', '');
            this.set('gameDeveloper', '');
            this.set('gameYear');
            this.set('imgURL');
            this.set('gameDescription', '');
        },
    }
});
