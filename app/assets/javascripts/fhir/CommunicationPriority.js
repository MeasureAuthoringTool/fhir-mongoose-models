const { ElementSchema } = require('./Element');
const { CommunicationPrioritySchema } = require('./allSchemaHeaders.js');

CommunicationPrioritySchema.add(ElementSchema);
CommunicationPrioritySchema.remove('id');
CommunicationPrioritySchema.add({
  value: String,
});

module.exports.CommunicationPrioritySchema = CommunicationPrioritySchema;
