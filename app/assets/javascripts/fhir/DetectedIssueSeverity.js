const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DetectedIssueSeveritySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DetectedIssueSeverity' },
  _type: { type: String, default: 'FHIR::DetectedIssueSeverity' },
});

class DetectedIssueSeverity extends mongoose.Document {
  constructor(object) {
    super(object, DetectedIssueSeveritySchema);
    this.typeName = 'DetectedIssueSeverity';
    this._type = 'FHIR::DetectedIssueSeverity';
  }
}

module.exports.DetectedIssueSeveritySchema = DetectedIssueSeveritySchema;
module.exports.DetectedIssueSeverity = DetectedIssueSeverity;
