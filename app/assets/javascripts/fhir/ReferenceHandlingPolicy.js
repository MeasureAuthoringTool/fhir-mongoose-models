const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ReferenceHandlingPolicySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ReferenceHandlingPolicy' },
  _type: { type: String, default: 'FHIR::ReferenceHandlingPolicy' },
});

class ReferenceHandlingPolicy extends mongoose.Document {
  constructor(object) {
    super(object, ReferenceHandlingPolicySchema);
    this.typeName = 'ReferenceHandlingPolicy';
    this._type = 'FHIR::ReferenceHandlingPolicy';
  }
}

module.exports.ReferenceHandlingPolicySchema = ReferenceHandlingPolicySchema;
module.exports.ReferenceHandlingPolicy = ReferenceHandlingPolicy;
