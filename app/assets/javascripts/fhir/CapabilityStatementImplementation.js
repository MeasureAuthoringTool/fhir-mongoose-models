const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUrlSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementImplementationSchema } = require('./allSchemaHeaders.js');

CapabilityStatementImplementationSchema.add(BackboneElementSchema);
CapabilityStatementImplementationSchema.remove('id');
CapabilityStatementImplementationSchema.add({
  description: PrimitiveStringSchema,
  url: PrimitiveUrlSchema,
  custodian: ReferenceSchema,
});

module.exports.CapabilityStatementImplementationSchema = CapabilityStatementImplementationSchema;
