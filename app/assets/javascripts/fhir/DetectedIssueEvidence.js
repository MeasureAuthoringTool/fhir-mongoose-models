const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const DetectedIssueEvidenceSchema = BackboneElementSchemaFunction({
  code: [CodeableConceptSchema],
  detail: [ReferenceSchema],
  typeName: { type: String, default: 'DetectedIssueEvidence' },
  _type: { type: String, default: 'FHIR::DetectedIssueEvidence' },
});

class DetectedIssueEvidence extends mongoose.Document {
  constructor(object) {
    super(object, DetectedIssueEvidenceSchema);
    this.typeName = 'DetectedIssueEvidence';
    this._type = 'FHIR::DetectedIssueEvidence';
  }
}

module.exports.DetectedIssueEvidenceSchema = DetectedIssueEvidenceSchema;
module.exports.DetectedIssueEvidence = DetectedIssueEvidence;
