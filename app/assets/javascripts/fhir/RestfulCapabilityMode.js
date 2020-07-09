const { ElementSchema } = require('./Element');
const { RestfulCapabilityModeSchema } = require('./allSchemaHeaders.js');

RestfulCapabilityModeSchema.add(ElementSchema);
RestfulCapabilityModeSchema.remove('id');
RestfulCapabilityModeSchema.add({
  value: String,
});

module.exports.RestfulCapabilityModeSchema = RestfulCapabilityModeSchema;
