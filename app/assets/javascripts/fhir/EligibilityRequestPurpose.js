const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const EligibilityRequestPurposeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'EligibilityRequestPurpose' },
  _type: { type: String, default: 'FHIR::EligibilityRequestPurpose' },
});

class EligibilityRequestPurpose extends mongoose.Document {
  constructor(object) {
    super(object, EligibilityRequestPurposeSchema);
    this.typeName = 'EligibilityRequestPurpose';
    this._type = 'FHIR::EligibilityRequestPurpose';
  }
}

module.exports.EligibilityRequestPurposeSchema = EligibilityRequestPurposeSchema;
module.exports.EligibilityRequestPurpose = EligibilityRequestPurpose;
