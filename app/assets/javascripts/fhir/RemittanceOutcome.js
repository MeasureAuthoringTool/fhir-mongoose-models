const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const RemittanceOutcomeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'RemittanceOutcome' },
  _type: { type: String, default: 'FHIR::RemittanceOutcome' },
});

class RemittanceOutcome extends mongoose.Document {
  constructor(object) {
    super(object, RemittanceOutcomeSchema);
    this.typeName = 'RemittanceOutcome';
    this._type = 'FHIR::RemittanceOutcome';
  }
}

module.exports.RemittanceOutcomeSchema = RemittanceOutcomeSchema;
module.exports.RemittanceOutcome = RemittanceOutcome;
