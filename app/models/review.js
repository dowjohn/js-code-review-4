import DS from 'ember-data';

export default DS.Model.extend({
    reviewerName: DS.attr('string'),
    reviewerDate: DS.attr(''),
    reviewerRating: DS.attr('number'),
    reviewerReview: DS.attr('string'),
    game: DS.belongsTo('game', {async: true}),
});
