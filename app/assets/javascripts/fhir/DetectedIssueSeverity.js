const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DetectedIssueSeveritySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'DetectedIssueSeverity' },
});

class DetectedIssueSeverity extends mongoose.Document {
  constructor(object) {
    super(object, DetectedIssueSeveritySchema);
    this._type = 'FHIR::DetectedIssueSeverity';
  }
};


module.exports.DetectedIssueSeveritySchema = DetectedIssueSeveritySchema;
module.exports.DetectedIssueSeverity = DetectedIssueSeverity;
