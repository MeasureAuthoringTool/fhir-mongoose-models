const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ClaimResponseStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ClaimResponseStatus' },
  _type: { type: String, default: 'FHIR::ClaimResponseStatus' },
});

class ClaimResponseStatus extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseStatusSchema);
    this.typeName = 'ClaimResponseStatus';
    this._type = 'FHIR::ClaimResponseStatus';
  }
}

module.exports.ClaimResponseStatusSchema = ClaimResponseStatusSchema;
module.exports.ClaimResponseStatus = ClaimResponseStatus;
