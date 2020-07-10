const { ElementSchema } = require('./Element');
const { CapabilityStatementKindSchema } = require('./allSchemaHeaders.js');

CapabilityStatementKindSchema.add(ElementSchema);
CapabilityStatementKindSchema.remove('id');
CapabilityStatementKindSchema.add({
  value: String,
});

module.exports.CapabilityStatementKindSchema = CapabilityStatementKindSchema;
