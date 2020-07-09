const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementSoftwareSchema } = require('./allSchemaHeaders.js');

CapabilityStatementSoftwareSchema.add(BackboneElementSchema);
CapabilityStatementSoftwareSchema.remove('id');
CapabilityStatementSoftwareSchema.add({
  name: PrimitiveStringSchema,
  version: PrimitiveStringSchema,
  releaseDate: PrimitiveDateTimeSchema,
});

module.exports.CapabilityStatementSoftwareSchema = CapabilityStatementSoftwareSchema;
