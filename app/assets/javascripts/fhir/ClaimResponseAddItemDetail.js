const { BackboneElementSchema } = require('./BackboneElement');
const { ClaimResponseAddItemDetailSubDetailSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseItemAdjudicationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { ClaimResponseAddItemDetailSchema } = require('./allSchemaHeaders.js');

ClaimResponseAddItemDetailSchema.add(BackboneElementSchema);
ClaimResponseAddItemDetailSchema.remove('id');
ClaimResponseAddItemDetailSchema.add({
  productOrService: CodeableConceptSchema,
  modifier: [CodeableConceptSchema],
  quantity: SimpleQuantitySchema,
  unitPrice: MoneySchema,
  factor: PrimitiveDecimalSchema,
  net: MoneySchema,
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ClaimResponseItemAdjudicationSchema],
  subDetail: [ClaimResponseAddItemDetailSubDetailSchema],
});

module.exports.ClaimResponseAddItemDetailSchema = ClaimResponseAddItemDetailSchema;
