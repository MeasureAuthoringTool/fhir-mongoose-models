const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const EligibilityResponseStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'EligibilityResponseStatus' },
  _type: { type: String, default: 'FHIR::EligibilityResponseStatus' },
});

class EligibilityResponseStatus extends mongoose.Document {
  constructor(object) {
    super(object, EligibilityResponseStatusSchema);
    this.typeName = 'EligibilityResponseStatus';
    this._type = 'FHIR::EligibilityResponseStatus';
  }
}

module.exports.EligibilityResponseStatusSchema = EligibilityResponseStatusSchema;
module.exports.EligibilityResponseStatus = EligibilityResponseStatus;
