const { ElementSchema } = require('./Element');
const { MessageheaderResponseRequestSchema } = require('./allSchemaHeaders.js');

MessageheaderResponseRequestSchema.add(ElementSchema);
MessageheaderResponseRequestSchema.remove('id');
MessageheaderResponseRequestSchema.add({
  value: String,
});

module.exports.MessageheaderResponseRequestSchema = MessageheaderResponseRequestSchema;
