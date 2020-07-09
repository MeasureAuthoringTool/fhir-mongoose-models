const { ElementSchema } = require('./Element');
const { SystemRestfulInteractionSchema } = require('./allSchemaHeaders.js');

SystemRestfulInteractionSchema.add(ElementSchema);
SystemRestfulInteractionSchema.remove('id');
SystemRestfulInteractionSchema.add({
  value: String,
});

module.exports.SystemRestfulInteractionSchema = SystemRestfulInteractionSchema;
