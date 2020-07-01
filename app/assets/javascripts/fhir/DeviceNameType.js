const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DeviceNameTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DeviceNameType' },
  _type: { type: String, default: 'FHIR::DeviceNameType' },
});

class DeviceNameType extends mongoose.Document {
  constructor(object) {
    super(object, DeviceNameTypeSchema);
    this.typeName = 'DeviceNameType';
    this._type = 'FHIR::DeviceNameType';
  }
}

module.exports.DeviceNameTypeSchema = DeviceNameTypeSchema;
module.exports.DeviceNameType = DeviceNameType;
