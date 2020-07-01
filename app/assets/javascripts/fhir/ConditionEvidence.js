const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const ConditionEvidenceSchema = BackboneElementSchemaFunction({
  code: [CodeableConceptSchema],
  detail: [ReferenceSchema],
  typeName: { type: String, default: 'ConditionEvidence' },
  _type: { type: String, default: 'FHIR::ConditionEvidence' },
});

class ConditionEvidence extends mongoose.Document {
  constructor(object) {
    super(object, ConditionEvidenceSchema);
    this.typeName = 'ConditionEvidence';
    this._type = 'FHIR::ConditionEvidence';
  }
}

module.exports.ConditionEvidenceSchema = ConditionEvidenceSchema;
module.exports.ConditionEvidence = ConditionEvidence;
