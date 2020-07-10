const { ElementSchema } = require('./Element');
const { RequestPrioritySchema } = require('./allSchemaHeaders.js');

RequestPrioritySchema.add(ElementSchema);
RequestPrioritySchema.remove('id');
RequestPrioritySchema.add({
  value: String,
});

module.exports.RequestPrioritySchema = RequestPrioritySchema;
