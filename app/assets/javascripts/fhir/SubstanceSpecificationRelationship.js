const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationRelationshipSchema } = require('./allSchemaHeaders.js');

SubstanceSpecificationRelationshipSchema.add(BackboneElementSchema);
SubstanceSpecificationRelationshipSchema.remove('id');
SubstanceSpecificationRelationshipSchema.add({
  substanceReference: ReferenceSchema,
  substanceCodeableConcept: CodeableConceptSchema,
  relationship: CodeableConceptSchema,
  isDefining: PrimitiveBooleanSchema,
  amountQuantity: QuantitySchema,
  amountRange: RangeSchema,
  amountRatio: RatioSchema,
  amountString: PrimitiveStringSchema,
  amountRatioLowLimit: RatioSchema,
  amountType: CodeableConceptSchema,
  source: [ReferenceSchema],
});

module.exports.SubstanceSpecificationRelationshipSchema = SubstanceSpecificationRelationshipSchema;
