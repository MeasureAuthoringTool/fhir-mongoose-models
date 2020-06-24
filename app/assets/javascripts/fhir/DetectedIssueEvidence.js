const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DetectedIssueEvidenceSchema = BackboneElementSchemaFunction({
   code : [CodeableConceptSchema],
   detail : [ReferenceSchema],
   fhirTitle: { type: String, default: 'DetectedIssueEvidence' },
});

class DetectedIssueEvidence extends mongoose.Document {
  constructor(object) {
    super(object, DetectedIssueEvidenceSchema);
    this._type = 'FHIR::DetectedIssueEvidence';
  }
};


module.exports.DetectedIssueEvidenceSchema = DetectedIssueEvidenceSchema;
module.exports.DetectedIssueEvidence = DetectedIssueEvidence;
