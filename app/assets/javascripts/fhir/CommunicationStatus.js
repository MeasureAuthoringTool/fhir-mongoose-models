const { ElementSchema } = require('./Element');
const { CommunicationStatusSchema } = require('./allSchemaHeaders.js');

CommunicationStatusSchema.add(ElementSchema);
CommunicationStatusSchema.remove('id');
CommunicationStatusSchema.add({
  value: String,
});

module.exports.CommunicationStatusSchema = CommunicationStatusSchema;
