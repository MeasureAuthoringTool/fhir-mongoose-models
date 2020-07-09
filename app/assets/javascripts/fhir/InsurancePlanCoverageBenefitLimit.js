const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { InsurancePlanCoverageBenefitLimitSchema } = require('./allSchemaHeaders.js');

InsurancePlanCoverageBenefitLimitSchema.add(BackboneElementSchema);
InsurancePlanCoverageBenefitLimitSchema.remove('id');
InsurancePlanCoverageBenefitLimitSchema.add({
  value: QuantitySchema,
  code: CodeableConceptSchema,
});

module.exports.InsurancePlanCoverageBenefitLimitSchema = InsurancePlanCoverageBenefitLimitSchema;
