const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitAddItemDetailSubDetailSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitAddItemDetailSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitAddItemDetailSchema.add(BackboneElementSchema);
ExplanationOfBenefitAddItemDetailSchema.remove('id');
ExplanationOfBenefitAddItemDetailSchema.add({
  productOrService: CodeableConceptSchema,
  modifier: [CodeableConceptSchema],
  quantity: SimpleQuantitySchema,
  unitPrice: MoneySchema,
  factor: PrimitiveDecimalSchema,
  net: MoneySchema,
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ExplanationOfBenefitItemAdjudicationSchema],
  subDetail: [ExplanationOfBenefitAddItemDetailSubDetailSchema],
});

module.exports.ExplanationOfBenefitAddItemDetailSchema = ExplanationOfBenefitAddItemDetailSchema;
