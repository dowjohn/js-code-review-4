import DS from 'ember-data';

export default DS.Model.extend({
    gameName: DS.attr('string'),
    gameGenre: DS.attr('string'),
    gameDeveloper: DS.attr('string'),
    gameYear: DS.attr('number'),
    imgURL: DS.attr('string'),
    gameDescription: DS.attr('string'),
    reviews: DS.hasMany('review', {async: true}),
});
