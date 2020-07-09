const { BackboneElementSchema } = require('./BackboneElement');
const { FHIRVersionSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideDefinitionResourceSchema } = require('./allSchemaHeaders.js');

ImplementationGuideDefinitionResourceSchema.add(BackboneElementSchema);
ImplementationGuideDefinitionResourceSchema.remove('id');
ImplementationGuideDefinitionResourceSchema.add({
  reference: ReferenceSchema,
  fhirVersion: [FHIRVersionSchema],
  name: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  exampleBoolean: PrimitiveBooleanSchema,
  exampleCanonical: PrimitiveCanonicalSchema,
  groupingId: PrimitiveIdSchema,
});

module.exports.ImplementationGuideDefinitionResourceSchema = ImplementationGuideDefinitionResourceSchema;
