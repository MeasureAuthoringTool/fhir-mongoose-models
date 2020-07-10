const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SubstanceReferenceInformationTargetSchema } = require('./allSchemaHeaders.js');

SubstanceReferenceInformationTargetSchema.add(BackboneElementSchema);
SubstanceReferenceInformationTargetSchema.remove('id');
SubstanceReferenceInformationTargetSchema.add({
  target: IdentifierSchema,
  type: CodeableConceptSchema,
  interaction: CodeableConceptSchema,
  organism: CodeableConceptSchema,
  organismType: CodeableConceptSchema,
  amountQuantity: QuantitySchema,
  amountRange: RangeSchema,
  amountString: PrimitiveStringSchema,
  amountType: CodeableConceptSchema,
  source: [ReferenceSchema],
});

module.exports.SubstanceReferenceInformationTargetSchema = SubstanceReferenceInformationTargetSchema;
