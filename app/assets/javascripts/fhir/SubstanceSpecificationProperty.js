const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationPropertySchema } = require('./allSchemaHeaders.js');

SubstanceSpecificationPropertySchema.add(BackboneElementSchema);
SubstanceSpecificationPropertySchema.remove('id');
SubstanceSpecificationPropertySchema.add({
  category: CodeableConceptSchema,
  code: CodeableConceptSchema,
  parameters: PrimitiveStringSchema,
  definingSubstanceReference: ReferenceSchema,
  definingSubstanceCodeableConcept: CodeableConceptSchema,
  amountQuantity: QuantitySchema,
  amountString: PrimitiveStringSchema,
});

module.exports.SubstanceSpecificationPropertySchema = SubstanceSpecificationPropertySchema;
