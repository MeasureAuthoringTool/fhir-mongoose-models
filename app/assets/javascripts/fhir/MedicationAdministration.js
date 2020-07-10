const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MedicationAdministrationDosageSchema } = require('./allSchemaHeaders.js');
const { MedicationAdministrationPerformerSchema } = require('./allSchemaHeaders.js');
const { MedicationAdministrationStatusSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicationAdministrationSchema } = require('./allSchemaHeaders.js');

MedicationAdministrationSchema.add(DomainResourceSchema);
MedicationAdministrationSchema.remove('id');
MedicationAdministrationSchema.add({
  identifier: [IdentifierSchema],
  instantiates: [PrimitiveUriSchema],
  partOf: [ReferenceSchema],
  status: MedicationAdministrationStatusSchema,
  statusReason: [CodeableConceptSchema],
  category: CodeableConceptSchema,
  medicationCodeableConcept: CodeableConceptSchema,
  medicationReference: ReferenceSchema,
  subject: ReferenceSchema,
  context: ReferenceSchema,
  supportingInformation: [ReferenceSchema],
  effectiveDateTime: PrimitiveDateTimeSchema,
  effectivePeriod: PeriodSchema,
  performer: [MedicationAdministrationPerformerSchema],
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  request: ReferenceSchema,
  device: [ReferenceSchema],
  note: [AnnotationSchema],
  dosage: MedicationAdministrationDosageSchema,
  eventHistory: [ReferenceSchema],
});

module.exports.MedicationAdministrationSchema = MedicationAdministrationSchema;
