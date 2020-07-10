const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitAddItemDetailSubDetailSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitAddItemDetailSubDetailSchema.add(BackboneElementSchema);
ExplanationOfBenefitAddItemDetailSubDetailSchema.remove('id');
ExplanationOfBenefitAddItemDetailSubDetailSchema.add({
  productOrService: CodeableConceptSchema,
  modifier: [CodeableConceptSchema],
  quantity: SimpleQuantitySchema,
  unitPrice: MoneySchema,
  factor: PrimitiveDecimalSchema,
  net: MoneySchema,
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ExplanationOfBenefitItemAdjudicationSchema],
});

module.exports.ExplanationOfBenefitAddItemDetailSubDetailSchema = ExplanationOfBenefitAddItemDetailSubDetailSchema;
