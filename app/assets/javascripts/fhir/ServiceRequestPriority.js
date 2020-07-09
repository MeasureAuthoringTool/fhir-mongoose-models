const { ElementSchema } = require('./Element');
const { ServiceRequestPrioritySchema } = require('./allSchemaHeaders.js');

ServiceRequestPrioritySchema.add(ElementSchema);
ServiceRequestPrioritySchema.remove('id');
ServiceRequestPrioritySchema.add({
  value: String,
});

module.exports.ServiceRequestPrioritySchema = ServiceRequestPrioritySchema;
