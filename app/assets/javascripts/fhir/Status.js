const { ElementSchema } = require('./Element');
const { StatusSchema } = require('./allSchemaHeaders.js');

StatusSchema.add(ElementSchema);
StatusSchema.remove('id');
StatusSchema.add({
  value: String,
});

module.exports.StatusSchema = StatusSchema;
