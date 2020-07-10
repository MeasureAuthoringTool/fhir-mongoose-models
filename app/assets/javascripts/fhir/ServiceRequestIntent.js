const { ElementSchema } = require('./Element');
const { ServiceRequestIntentSchema } = require('./allSchemaHeaders.js');

ServiceRequestIntentSchema.add(ElementSchema);
ServiceRequestIntentSchema.remove('id');
ServiceRequestIntentSchema.add({
  value: String,
});

module.exports.ServiceRequestIntentSchema = ServiceRequestIntentSchema;
