const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitItemDetailSubDetailSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitItemDetailSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitItemDetailSchema.add(BackboneElementSchema);
ExplanationOfBenefitItemDetailSchema.remove('id');
ExplanationOfBenefitItemDetailSchema.add({
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
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ExplanationOfBenefitItemAdjudicationSchema],
  subDetail: [ExplanationOfBenefitItemDetailSubDetailSchema],
});

module.exports.ExplanationOfBenefitItemDetailSchema = ExplanationOfBenefitItemDetailSchema;
