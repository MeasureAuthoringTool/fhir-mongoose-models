const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { PractitionerQualificationSchema } = require('./allSchemaHeaders.js');

PractitionerQualificationSchema.add(BackboneElementSchema);
PractitionerQualificationSchema.remove('id');
PractitionerQualificationSchema.add({
  identifier: [IdentifierSchema],
  code: CodeableConceptSchema,
  period: PeriodSchema,
  issuer: ReferenceSchema,
});

module.exports.PractitionerQualificationSchema = PractitionerQualificationSchema;
