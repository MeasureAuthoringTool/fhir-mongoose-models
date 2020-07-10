const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { DosageSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MedicationDispensePerformerSchema } = require('./allSchemaHeaders.js');
const { MedicationDispenseStatusSchema } = require('./allSchemaHeaders.js');
const { MedicationDispenseSubstitutionSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { MedicationDispenseSchema } = require('./allSchemaHeaders.js');

MedicationDispenseSchema.add(DomainResourceSchema);
MedicationDispenseSchema.remove('id');
MedicationDispenseSchema.add({
  identifier: [IdentifierSchema],
  partOf: [ReferenceSchema],
  status: MedicationDispenseStatusSchema,
  statusReasonCodeableConcept: CodeableConceptSchema,
  statusReasonReference: ReferenceSchema,
  category: CodeableConceptSchema,
  medicationCodeableConcept: CodeableConceptSchema,
  medicationReference: ReferenceSchema,
  subject: ReferenceSchema,
  context: ReferenceSchema,
  supportingInformation: [ReferenceSchema],
  performer: [MedicationDispensePerformerSchema],
  location: ReferenceSchema,
  authorizingPrescription: [ReferenceSchema],
  type: CodeableConceptSchema,
  quantity: SimpleQuantitySchema,
  daysSupply: SimpleQuantitySchema,
  whenPrepared: PrimitiveDateTimeSchema,
  whenHandedOver: PrimitiveDateTimeSchema,
  destination: ReferenceSchema,
  receiver: [ReferenceSchema],
  note: [AnnotationSchema],
  dosageInstruction: [DosageSchema],
  substitution: MedicationDispenseSubstitutionSchema,
  detectedIssue: [ReferenceSchema],
  eventHistory: [ReferenceSchema],
});

module.exports.MedicationDispenseSchema = MedicationDispenseSchema;
