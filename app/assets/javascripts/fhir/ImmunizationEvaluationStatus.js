const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ImmunizationEvaluationStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ImmunizationEvaluationStatus' },
  _type: { type: String, default: 'FHIR::ImmunizationEvaluationStatus' },
});

class ImmunizationEvaluationStatus extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationEvaluationStatusSchema);
    this.typeName = 'ImmunizationEvaluationStatus';
    this._type = 'FHIR::ImmunizationEvaluationStatus';
  }
}

module.exports.ImmunizationEvaluationStatusSchema = ImmunizationEvaluationStatusSchema;
module.exports.ImmunizationEvaluationStatus = ImmunizationEvaluationStatus;
