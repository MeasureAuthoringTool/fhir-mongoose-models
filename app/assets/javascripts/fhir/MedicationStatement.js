const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { DosageSchema } = require('./Dosage');
const { IdentifierSchema } = require('./Identifier');
const { MedicationStatementStatusSchema } = require('./MedicationStatementStatus');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const MedicationStatementSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'MedicationStatement' },
  _type: { type: String, default: 'FHIR::MedicationStatement' },
});

class MedicationStatement extends mongoose.Document {
  constructor(object) {
    super(object, MedicationStatementSchema);
    this.typeName = 'MedicationStatement';
    this._type = 'FHIR::MedicationStatement';
  }
}

module.exports.MedicationStatementSchema = MedicationStatementSchema;
module.exports.MedicationStatement = MedicationStatement;
