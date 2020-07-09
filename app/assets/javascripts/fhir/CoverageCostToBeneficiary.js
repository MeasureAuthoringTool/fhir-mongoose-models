const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CoverageCostToBeneficiaryExceptionSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { CoverageCostToBeneficiarySchema } = require('./allSchemaHeaders.js');

CoverageCostToBeneficiarySchema.add(BackboneElementSchema);
CoverageCostToBeneficiarySchema.remove('id');
CoverageCostToBeneficiarySchema.add({
  type: CodeableConceptSchema,
  valueSimpleQuantity: SimpleQuantitySchema,
  valueMoney: MoneySchema,
  exception: [CoverageCostToBeneficiaryExceptionSchema],
});

module.exports.CoverageCostToBeneficiarySchema = CoverageCostToBeneficiarySchema;
