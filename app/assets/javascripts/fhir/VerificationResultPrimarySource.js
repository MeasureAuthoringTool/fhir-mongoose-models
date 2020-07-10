const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { VerificationResultPrimarySourceSchema } = require('./allSchemaHeaders.js');

VerificationResultPrimarySourceSchema.add(BackboneElementSchema);
VerificationResultPrimarySourceSchema.remove('id');
VerificationResultPrimarySourceSchema.add({
  who: ReferenceSchema,
  type: [CodeableConceptSchema],
  communicationMethod: [CodeableConceptSchema],
  validationStatus: CodeableConceptSchema,
  validationDate: PrimitiveDateTimeSchema,
  canPushUpdates: CodeableConceptSchema,
  pushTypeAvailable: [CodeableConceptSchema],
});

module.exports.VerificationResultPrimarySourceSchema = VerificationResultPrimarySourceSchema;
