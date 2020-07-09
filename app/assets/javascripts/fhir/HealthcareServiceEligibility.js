const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { HealthcareServiceEligibilitySchema } = require('./allSchemaHeaders.js');

HealthcareServiceEligibilitySchema.add(BackboneElementSchema);
HealthcareServiceEligibilitySchema.remove('id');
HealthcareServiceEligibilitySchema.add({
  code: CodeableConceptSchema,
  comment: PrimitiveMarkdownSchema,
});

module.exports.HealthcareServiceEligibilitySchema = HealthcareServiceEligibilitySchema;
