const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { CoverageCostToBeneficiaryExceptionSchema } = require('./allSchemaHeaders.js');

CoverageCostToBeneficiaryExceptionSchema.add(BackboneElementSchema);
CoverageCostToBeneficiaryExceptionSchema.remove('id');
CoverageCostToBeneficiaryExceptionSchema.add({
  type: CodeableConceptSchema,
  period: PeriodSchema,
});

module.exports.CoverageCostToBeneficiaryExceptionSchema = CoverageCostToBeneficiaryExceptionSchema;
