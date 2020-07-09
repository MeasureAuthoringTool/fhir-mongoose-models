const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { DosageSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MedicationStatementStatusSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicationStatementSchema } = require('./allSchemaHeaders.js');

MedicationStatementSchema.add(DomainResourceSchema);
MedicationStatementSchema.remove('id');
MedicationStatementSchema.add({
  identifier: [IdentifierSchema],
  basedOn: [ReferenceSchema],
  partOf: [ReferenceSchema],
  status: MedicationStatementStatusSchema,
  statusReason: [CodeableConceptSchema],
  category: CodeableConceptSchema,
  medicationCodeableConcept: CodeableConceptSchema,
  medicationReference: ReferenceSchema,
  subject: ReferenceSchema,
  context: ReferenceSchema,
  effectiveDateTime: PrimitiveDateTimeSchema,
  effectivePeriod: PeriodSchema,
  dateAsserted: PrimitiveDateTimeSchema,
  informationSource: ReferenceSchema,
  derivedFrom: [ReferenceSchema],
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  note: [AnnotationSchema],
  dosage: [DosageSchema],
});

module.exports.MedicationStatementSchema = MedicationStatementSchema;
