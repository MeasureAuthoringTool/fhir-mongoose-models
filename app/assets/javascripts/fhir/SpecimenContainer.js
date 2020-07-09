const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { SpecimenContainerSchema } = require('./allSchemaHeaders.js');

SpecimenContainerSchema.add(BackboneElementSchema);
SpecimenContainerSchema.remove('id');
SpecimenContainerSchema.add({
  identifier: [IdentifierSchema],
  description: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  capacity: SimpleQuantitySchema,
  specimenQuantity: SimpleQuantitySchema,
  additiveCodeableConcept: CodeableConceptSchema,
  additiveReference: ReferenceSchema,
});

module.exports.SpecimenContainerSchema = SpecimenContainerSchema;
