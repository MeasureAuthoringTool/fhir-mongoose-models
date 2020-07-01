const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { DosageSchema } = require('./Dosage');
const { IdentifierSchema } = require('./Identifier');
const { MedicationRequestDispenseRequestSchema } = require('./MedicationRequestDispenseRequest');
const { MedicationRequestIntentSchema } = require('./MedicationRequestIntent');
const { MedicationRequestPrioritySchema } = require('./MedicationRequestPriority');
const { MedicationRequestStatusSchema } = require('./MedicationRequestStatus');
const { MedicationRequestSubstitutionSchema } = require('./MedicationRequestSubstitution');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');

const MedicationRequestSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'MedicationRequest' },
  _type: { type: String, default: 'FHIR::MedicationRequest' },
});

class MedicationRequest extends mongoose.Document {
  constructor(object) {
    super(object, MedicationRequestSchema);
    this.typeName = 'MedicationRequest';
    this._type = 'FHIR::MedicationRequest';
  }
}

module.exports.MedicationRequestSchema = MedicationRequestSchema;
module.exports.MedicationRequest = MedicationRequest;
