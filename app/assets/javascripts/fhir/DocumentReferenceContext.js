const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { DocumentReferenceContextSchema } = require('./allSchemaHeaders.js');

DocumentReferenceContextSchema.add(BackboneElementSchema);
DocumentReferenceContextSchema.remove('id');
DocumentReferenceContextSchema.add({
  encounter: [ReferenceSchema],
  event: [CodeableConceptSchema],
  period: PeriodSchema,
  facilityType: CodeableConceptSchema,
  practiceSetting: CodeableConceptSchema,
  sourcePatientInfo: ReferenceSchema,
  related: [ReferenceSchema],
});

module.exports.DocumentReferenceContextSchema = DocumentReferenceContextSchema;
