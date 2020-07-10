const { BackboneElementSchema } = require('./BackboneElement');
const { CoverageEligibilityResponseInsuranceItemSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityResponseInsuranceSchema } = require('./allSchemaHeaders.js');

CoverageEligibilityResponseInsuranceSchema.add(BackboneElementSchema);
CoverageEligibilityResponseInsuranceSchema.remove('id');
CoverageEligibilityResponseInsuranceSchema.add({
  coverage: ReferenceSchema,
  inforce: PrimitiveBooleanSchema,
  benefitPeriod: PeriodSchema,
  item: [CoverageEligibilityResponseInsuranceItemSchema],
});

module.exports.CoverageEligibilityResponseInsuranceSchema = CoverageEligibilityResponseInsuranceSchema;
