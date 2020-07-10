const { ElementSchema } = require('./Element');
const { ConsentStateSchema } = require('./allSchemaHeaders.js');

ConsentStateSchema.add(ElementSchema);
ConsentStateSchema.remove('id');
ConsentStateSchema.add({
  value: String,
});

module.exports.ConsentStateSchema = ConsentStateSchema;
