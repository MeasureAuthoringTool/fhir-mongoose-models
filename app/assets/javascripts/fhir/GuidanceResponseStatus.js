const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const GuidanceResponseStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'GuidanceResponseStatus' },
  _type: { type: String, default: 'FHIR::GuidanceResponseStatus' },
});

class GuidanceResponseStatus extends mongoose.Document {
  constructor(object) {
    super(object, GuidanceResponseStatusSchema);
    this.typeName = 'GuidanceResponseStatus';
    this._type = 'FHIR::GuidanceResponseStatus';
  }
}

module.exports.GuidanceResponseStatusSchema = GuidanceResponseStatusSchema;
module.exports.GuidanceResponseStatus = GuidanceResponseStatus;
