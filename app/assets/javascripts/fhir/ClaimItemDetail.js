const { BackboneElementSchema } = require('./BackboneElement');
const { ClaimItemDetailSubDetailSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { ClaimItemDetailSchema } = require('./allSchemaHeaders.js');

ClaimItemDetailSchema.add(BackboneElementSchema);
ClaimItemDetailSchema.remove('id');
ClaimItemDetailSchema.add({
  sequence: PrimitivePositiveIntSchema,
  revenue: CodeableConceptSchema,
  category: CodeableConceptSchema,
  productOrService: CodeableConceptSchema,
  modifier: [CodeableConceptSchema],
  programCode: [CodeableConceptSchema],
  quantity: SimpleQuantitySchema,
  unitPrice: MoneySchema,
  factor: PrimitiveDecimalSchema,
  net: MoneySchema,
  udi: [ReferenceSchema],
  subDetail: [ClaimItemDetailSubDetailSchema],
});

module.exports.ClaimItemDetailSchema = ClaimItemDetailSchema;
