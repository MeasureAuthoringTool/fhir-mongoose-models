const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityRequestInsuranceSchema } = require('./allSchemaHeaders.js');

CoverageEligibilityRequestInsuranceSchema.add(BackboneElementSchema);
CoverageEligibilityRequestInsuranceSchema.remove('id');
CoverageEligibilityRequestInsuranceSchema.add({
  focal: PrimitiveBooleanSchema,
  coverage: ReferenceSchema,
  businessArrangement: PrimitiveStringSchema,
});

module.exports.CoverageEligibilityRequestInsuranceSchema = CoverageEligibilityRequestInsuranceSchema;
