const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanCoverageBenefitLimitSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanCoverageBenefitSchema } = require('./allSchemaHeaders.js');

InsurancePlanCoverageBenefitSchema.add(BackboneElementSchema);
InsurancePlanCoverageBenefitSchema.remove('id');
InsurancePlanCoverageBenefitSchema.add({
  type: CodeableConceptSchema,
  requirement: PrimitiveStringSchema,
  limit: [InsurancePlanCoverageBenefitLimitSchema],
});

module.exports.InsurancePlanCoverageBenefitSchema = InsurancePlanCoverageBenefitSchema;
