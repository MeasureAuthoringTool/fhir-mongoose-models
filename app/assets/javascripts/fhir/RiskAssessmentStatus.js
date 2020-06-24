const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RiskAssessmentStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'RiskAssessmentStatus' },
});

class RiskAssessmentStatus extends mongoose.Document {
  constructor(object) {
    super(object, RiskAssessmentStatusSchema);
    this._type = 'FHIR::RiskAssessmentStatus';
  }
};


module.exports.RiskAssessmentStatusSchema = RiskAssessmentStatusSchema;
module.exports.RiskAssessmentStatus = RiskAssessmentStatus;
