const { ElementSchema } = require('./Element');
const { RequestStatusSchema } = require('./allSchemaHeaders.js');

RequestStatusSchema.add(ElementSchema);
RequestStatusSchema.remove('id');
RequestStatusSchema.add({
  value: String,
});

module.exports.RequestStatusSchema = RequestStatusSchema;
