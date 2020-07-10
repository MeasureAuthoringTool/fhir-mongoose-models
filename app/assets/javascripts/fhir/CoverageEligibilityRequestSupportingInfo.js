const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityRequestSupportingInfoSchema } = require('./allSchemaHeaders.js');

CoverageEligibilityRequestSupportingInfoSchema.add(BackboneElementSchema);
CoverageEligibilityRequestSupportingInfoSchema.remove('id');
CoverageEligibilityRequestSupportingInfoSchema.add({
  sequence: PrimitivePositiveIntSchema,
  information: ReferenceSchema,
  appliesToAll: PrimitiveBooleanSchema,
});

module.exports.CoverageEligibilityRequestSupportingInfoSchema = CoverageEligibilityRequestSupportingInfoSchema;
