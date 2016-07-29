var find = require('../helper');

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('yoyo').del()
        .then(function() {
            return knex('type').select()
                .then(function(types) {
                    return Promise.all([
                        // Inserts seed entries
                        knex('yoyo').insert({
                            name: 'BestYoyoEver',
                            price: '15.99',
                            rating: 10,
                            difficulty: '10',
                            imageURL: "http://vignette1.wikia.nocookie.net/yoyo/images/7/7b/EPIC.jpg/revision/latest?cb=20110312000448",
                            videoUrl: "F1GbxCvy5rs",
                            type_id: find.findTypeId("hard", types)
                        }),
                        knex('yoyo').insert({
                            name: 'YoyoingSoHard',
                            price: '12.99',
                            rating: 4,
                            difficulty: '40',
                            imageURL: "https://yoyotricks.com/wp-content/uploads/2015/07/YoyoJam-Transcend-Yoyo-BLue-Green-Blasted.jpg",
                            videoUrl: "uHEs5JRFEUU",
                            type_id: find.findTypeId("hard", types)
                        }),
                        knex('yoyo').insert({
                            name: 'NinjaYoyo',
                            price: '199.99',
                            rating: 9,
                            difficulty: "You will die",
                            imageURL: "http://vignette2.wikia.nocookie.net/rwbyfanon/images/a/a8/Yoyo_spiked.png/revision/latest?cb=20160311181259",
                            videoUrl: "t5P-fdrlBg8",
                            type_id: find.findTypeId("hard", types)
                        })
                    ]);
                })
        });
};
