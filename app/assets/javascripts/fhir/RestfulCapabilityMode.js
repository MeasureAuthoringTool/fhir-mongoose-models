const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const RestfulCapabilityModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'RestfulCapabilityMode' },
  _type: { type: String, default: 'FHIR::RestfulCapabilityMode' },
});

class RestfulCapabilityMode extends mongoose.Document {
  constructor(object) {
    super(object, RestfulCapabilityModeSchema);
    this.typeName = 'RestfulCapabilityMode';
    this._type = 'FHIR::RestfulCapabilityMode';
  }
}

module.exports.RestfulCapabilityModeSchema = RestfulCapabilityModeSchema;
module.exports.RestfulCapabilityMode = RestfulCapabilityMode;
