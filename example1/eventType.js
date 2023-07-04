const avro = require('avsc');

const avroType = avro.Type.forSchema({
  type: 'record',
  fields: [
    {
      name: 'category',
      type: { type: 'enum', symbols: ['DOG', 'CAT'] }
    },
    {
      name: 'noise',
      type: 'string',
    }
  ]
});

const type = avro.Type.forSchema({
    type: 'record',
    name: 'Pet',
    fields: [
      {
        name: 'category',
        type: {type: 'enum', name: 'PetKind', symbols: ['CAT', 'DOG']}
      },
      {name: 'noise', type: 'string'}
    ]
  });

module.exports = type;