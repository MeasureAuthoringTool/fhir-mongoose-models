const { ElementSchema } = require('./Element');
const { ConditionalReadStatusSchema } = require('./allSchemaHeaders.js');

ConditionalReadStatusSchema.add(ElementSchema);
ConditionalReadStatusSchema.remove('id');
ConditionalReadStatusSchema.add({
  value: String,
});

module.exports.ConditionalReadStatusSchema = ConditionalReadStatusSchema;
