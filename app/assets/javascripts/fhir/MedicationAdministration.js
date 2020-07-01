const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MedicationAdministrationDosageSchema } = require('./MedicationAdministrationDosage');
const { MedicationAdministrationPerformerSchema } = require('./MedicationAdministrationPerformer');
const { MedicationAdministrationStatusSchema } = require('./MedicationAdministrationStatus');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');

const MedicationAdministrationSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'MedicationAdministration' },
  _type: { type: String, default: 'FHIR::MedicationAdministration' },
});

class MedicationAdministration extends mongoose.Document {
  constructor(object) {
    super(object, MedicationAdministrationSchema);
    this.typeName = 'MedicationAdministration';
    this._type = 'FHIR::MedicationAdministration';
  }
}

module.exports.MedicationAdministrationSchema = MedicationAdministrationSchema;
module.exports.MedicationAdministration = MedicationAdministration;
