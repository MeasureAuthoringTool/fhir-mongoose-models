const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const FHIRDeviceStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'FHIRDeviceStatus' },
  _type: { type: String, default: 'FHIR::FHIRDeviceStatus' },
});

class FHIRDeviceStatus extends mongoose.Document {
  constructor(object) {
    super(object, FHIRDeviceStatusSchema);
    this.typeName = 'FHIRDeviceStatus';
    this._type = 'FHIR::FHIRDeviceStatus';
  }
}

module.exports.FHIRDeviceStatusSchema = FHIRDeviceStatusSchema;
module.exports.FHIRDeviceStatus = FHIRDeviceStatus;
