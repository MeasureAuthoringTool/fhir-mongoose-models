const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityResponseErrorSchema } = require('./allSchemaHeaders.js');

CoverageEligibilityResponseErrorSchema.add(BackboneElementSchema);
CoverageEligibilityResponseErrorSchema.remove('id');
CoverageEligibilityResponseErrorSchema.add({
  code: CodeableConceptSchema,
});

module.exports.CoverageEligibilityResponseErrorSchema = CoverageEligibilityResponseErrorSchema;
