const { ElementSchema } = require('./Element');
const { ServiceRequestStatusSchema } = require('./allSchemaHeaders.js');

ServiceRequestStatusSchema.add(ElementSchema);
ServiceRequestStatusSchema.remove('id');
ServiceRequestStatusSchema.add({
  value: String,
});

module.exports.ServiceRequestStatusSchema = ServiceRequestStatusSchema;
