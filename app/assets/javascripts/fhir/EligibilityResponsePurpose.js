const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const EligibilityResponsePurposeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'EligibilityResponsePurpose' },
  _type: { type: String, default: 'FHIR::EligibilityResponsePurpose' },
});

class EligibilityResponsePurpose extends mongoose.Document {
  constructor(object) {
    super(object, EligibilityResponsePurposeSchema);
    this.typeName = 'EligibilityResponsePurpose';
    this._type = 'FHIR::EligibilityResponsePurpose';
  }
}

module.exports.EligibilityResponsePurposeSchema = EligibilityResponsePurposeSchema;
module.exports.EligibilityResponsePurpose = EligibilityResponsePurpose;
