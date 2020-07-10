const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityRequestItemDiagnosisSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityRequestItemSchema } = require('./allSchemaHeaders.js');

CoverageEligibilityRequestItemSchema.add(BackboneElementSchema);
CoverageEligibilityRequestItemSchema.remove('id');
CoverageEligibilityRequestItemSchema.add({
  supportingInfoSequence: [PrimitivePositiveIntSchema],
  category: CodeableConceptSchema,
  productOrService: CodeableConceptSchema,
  modifier: [CodeableConceptSchema],
  provider: ReferenceSchema,
  quantity: SimpleQuantitySchema,
  unitPrice: MoneySchema,
  facility: ReferenceSchema,
  diagnosis: [CoverageEligibilityRequestItemDiagnosisSchema],
  detail: [ReferenceSchema],
});

module.exports.CoverageEligibilityRequestItemSchema = CoverageEligibilityRequestItemSchema;
