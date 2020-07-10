const { BackboneElementSchema } = require('./BackboneElement');
const { ClaimResponseItemAdjudicationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { ClaimResponseAddItemDetailSubDetailSchema } = require('./allSchemaHeaders.js');

ClaimResponseAddItemDetailSubDetailSchema.add(BackboneElementSchema);
ClaimResponseAddItemDetailSubDetailSchema.remove('id');
ClaimResponseAddItemDetailSubDetailSchema.add({
  productOrService: CodeableConceptSchema,
  modifier: [CodeableConceptSchema],
  quantity: SimpleQuantitySchema,
  unitPrice: MoneySchema,
  factor: PrimitiveDecimalSchema,
  net: MoneySchema,
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ClaimResponseItemAdjudicationSchema],
});

module.exports.ClaimResponseAddItemDetailSubDetailSchema = ClaimResponseAddItemDetailSubDetailSchema;
