const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { SubstanceAmountReferenceRangeSchema } = require('./allSchemaHeaders.js');
const { SubstanceAmountSchema } = require('./allSchemaHeaders.js');

SubstanceAmountSchema.add(BackboneElementSchema);
SubstanceAmountSchema.remove('id');
SubstanceAmountSchema.add({
  amountQuantity: QuantitySchema,
  amountRange: RangeSchema,
  amountString: PrimitiveStringSchema,
  amountType: CodeableConceptSchema,
  amountText: PrimitiveStringSchema,
  referenceRange: SubstanceAmountReferenceRangeSchema,
});

module.exports.SubstanceAmountSchema = SubstanceAmountSchema;
