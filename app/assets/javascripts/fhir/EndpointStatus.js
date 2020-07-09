const { ElementSchema } = require('./Element');
const { EndpointStatusSchema } = require('./allSchemaHeaders.js');

EndpointStatusSchema.add(ElementSchema);
EndpointStatusSchema.remove('id');
EndpointStatusSchema.add({
  value: String,
});

module.exports.EndpointStatusSchema = EndpointStatusSchema;
