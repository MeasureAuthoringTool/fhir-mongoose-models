const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { DosageSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MedicationRequestDispenseRequestSchema } = require('./allSchemaHeaders.js');
const { MedicationRequestIntentSchema } = require('./allSchemaHeaders.js');
const { MedicationRequestPrioritySchema } = require('./allSchemaHeaders.js');
const { MedicationRequestStatusSchema } = require('./allSchemaHeaders.js');
const { MedicationRequestSubstitutionSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicationRequestSchema } = require('./allSchemaHeaders.js');

MedicationRequestSchema.add(DomainResourceSchema);
MedicationRequestSchema.remove('id');
MedicationRequestSchema.add({
  identifier: [IdentifierSchema],
  status: MedicationRequestStatusSchema,
  statusReason: CodeableConceptSchema,
  intent: MedicationRequestIntentSchema,
  category: [CodeableConceptSchema],
  priority: MedicationRequestPrioritySchema,
  doNotPerform: PrimitiveBooleanSchema,
  reportedBoolean: PrimitiveBooleanSchema,
  reportedReference: ReferenceSchema,
  medicationCodeableConcept: CodeableConceptSchema,
  medicationReference: ReferenceSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  supportingInformation: [ReferenceSchema],
  authoredOn: PrimitiveDateTimeSchema,
  requester: ReferenceSchema,
  performer: ReferenceSchema,
  performerType: CodeableConceptSchema,
  recorder: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  basedOn: [ReferenceSchema],
  groupIdentifier: IdentifierSchema,
  courseOfTherapyType: CodeableConceptSchema,
  insurance: [ReferenceSchema],
  note: [AnnotationSchema],
  dosageInstruction: [DosageSchema],
  dispenseRequest: MedicationRequestDispenseRequestSchema,
  substitution: MedicationRequestSubstitutionSchema,
  priorPrescription: ReferenceSchema,
  detectedIssue: [ReferenceSchema],
  eventHistory: [ReferenceSchema],
});

module.exports.MedicationRequestSchema = MedicationRequestSchema;
