const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanCoverageBenefitSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanCoverageSchema } = require('./allSchemaHeaders.js');

InsurancePlanCoverageSchema.add(BackboneElementSchema);
InsurancePlanCoverageSchema.remove('id');
InsurancePlanCoverageSchema.add({
  type: CodeableConceptSchema,
  network: [ReferenceSchema],
  benefit: [InsurancePlanCoverageBenefitSchema],
});

module.exports.InsurancePlanCoverageSchema = InsurancePlanCoverageSchema;
