const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ExplanationOfBenefitStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ExplanationOfBenefitStatus' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitStatus' },
});

class ExplanationOfBenefitStatus extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitStatusSchema);
    this.typeName = 'ExplanationOfBenefitStatus';
    this._type = 'FHIR::ExplanationOfBenefitStatus';
  }
}

module.exports.ExplanationOfBenefitStatusSchema = ExplanationOfBenefitStatusSchema;
module.exports.ExplanationOfBenefitStatus = ExplanationOfBenefitStatus;
