const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DetectedIssueStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'DetectedIssueStatus' },
});

class DetectedIssueStatus extends mongoose.Document {
  constructor(object) {
    super(object, DetectedIssueStatusSchema);
    this._type = 'FHIR::DetectedIssueStatus';
  }
};


module.exports.DetectedIssueStatusSchema = DetectedIssueStatusSchema;
module.exports.DetectedIssueStatus = DetectedIssueStatus;
