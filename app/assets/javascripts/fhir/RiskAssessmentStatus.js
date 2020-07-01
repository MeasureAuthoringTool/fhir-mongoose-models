const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const RiskAssessmentStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'RiskAssessmentStatus' },
  _type: { type: String, default: 'FHIR::RiskAssessmentStatus' },
});

class RiskAssessmentStatus extends mongoose.Document {
  constructor(object) {
    super(object, RiskAssessmentStatusSchema);
    this.typeName = 'RiskAssessmentStatus';
    this._type = 'FHIR::RiskAssessmentStatus';
  }
}

module.exports.RiskAssessmentStatusSchema = RiskAssessmentStatusSchema;
module.exports.RiskAssessmentStatus = RiskAssessmentStatus;
