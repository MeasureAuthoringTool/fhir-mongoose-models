const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ClaimStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ClaimStatus' },
  _type: { type: String, default: 'FHIR::ClaimStatus' },
});

class ClaimStatus extends mongoose.Document {
  constructor(object) {
    super(object, ClaimStatusSchema);
    this.typeName = 'ClaimStatus';
    this._type = 'FHIR::ClaimStatus';
  }
}

module.exports.ClaimStatusSchema = ClaimStatusSchema;
module.exports.ClaimStatus = ClaimStatus;
