const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { DosageSchema } = require('./Dosage');
const { IdentifierSchema } = require('./Identifier');
const { MedicationDispensePerformerSchema } = require('./MedicationDispensePerformer');
const { MedicationDispenseStatusSchema } = require('./MedicationDispenseStatus');
const { MedicationDispenseSubstitutionSchema } = require('./MedicationDispenseSubstitution');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const MedicationDispenseSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'MedicationDispense' },
  _type: { type: String, default: 'FHIR::MedicationDispense' },
});

class MedicationDispense extends mongoose.Document {
  constructor(object) {
    super(object, MedicationDispenseSchema);
    this.typeName = 'MedicationDispense';
    this._type = 'FHIR::MedicationDispense';
  }
}

module.exports.MedicationDispenseSchema = MedicationDispenseSchema;
module.exports.MedicationDispense = MedicationDispense;
