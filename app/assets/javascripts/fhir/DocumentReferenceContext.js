const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');

const DocumentReferenceContextSchema = BackboneElementSchemaFunction({
  encounter: [ReferenceSchema],
  event: [CodeableConceptSchema],
  period: PeriodSchema,
  facilityType: CodeableConceptSchema,
  practiceSetting: CodeableConceptSchema,
  sourcePatientInfo: ReferenceSchema,
  related: [ReferenceSchema],
  typeName: { type: String, default: 'DocumentReferenceContext' },
  _type: { type: String, default: 'FHIR::DocumentReferenceContext' },
});

class DocumentReferenceContext extends mongoose.Document {
  constructor(object) {
    super(object, DocumentReferenceContextSchema);
    this.typeName = 'DocumentReferenceContext';
    this._type = 'FHIR::DocumentReferenceContext';
  }
}

module.exports.DocumentReferenceContextSchema = DocumentReferenceContextSchema;
module.exports.DocumentReferenceContext = DocumentReferenceContext;
