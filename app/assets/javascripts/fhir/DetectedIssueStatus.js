const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DetectedIssueStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DetectedIssueStatus' },
  _type: { type: String, default: 'FHIR::DetectedIssueStatus' },
});

class DetectedIssueStatus extends mongoose.Document {
  constructor(object) {
    super(object, DetectedIssueStatusSchema);
    this.typeName = 'DetectedIssueStatus';
    this._type = 'FHIR::DetectedIssueStatus';
  }
}

module.exports.DetectedIssueStatusSchema = DetectedIssueStatusSchema;
module.exports.DetectedIssueStatus = DetectedIssueStatus;
