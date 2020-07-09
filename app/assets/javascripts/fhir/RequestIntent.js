const { ElementSchema } = require('./Element');
const { RequestIntentSchema } = require('./allSchemaHeaders.js');

RequestIntentSchema.add(ElementSchema);
RequestIntentSchema.remove('id');
RequestIntentSchema.add({
  value: String,
});

module.exports.RequestIntentSchema = RequestIntentSchema;
