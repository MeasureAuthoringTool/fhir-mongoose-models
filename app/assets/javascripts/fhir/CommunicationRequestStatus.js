const { ElementSchema } = require('./Element');
const { CommunicationRequestStatusSchema } = require('./allSchemaHeaders.js');

CommunicationRequestStatusSchema.add(ElementSchema);
CommunicationRequestStatusSchema.remove('id');
CommunicationRequestStatusSchema.add({
  value: String,
});

module.exports.CommunicationRequestStatusSchema = CommunicationRequestStatusSchema;
