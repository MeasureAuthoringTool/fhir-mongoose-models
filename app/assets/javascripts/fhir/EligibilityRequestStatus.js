const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const EligibilityRequestStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'EligibilityRequestStatus' },
  _type: { type: String, default: 'FHIR::EligibilityRequestStatus' },
});

class EligibilityRequestStatus extends mongoose.Document {
  constructor(object) {
    super(object, EligibilityRequestStatusSchema);
    this.typeName = 'EligibilityRequestStatus';
    this._type = 'FHIR::EligibilityRequestStatus';
  }
}

module.exports.EligibilityRequestStatusSchema = EligibilityRequestStatusSchema;
module.exports.EligibilityRequestStatus = EligibilityRequestStatus;
