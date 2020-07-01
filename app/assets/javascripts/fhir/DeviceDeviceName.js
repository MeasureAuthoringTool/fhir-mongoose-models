const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { DeviceNameTypeSchema } = require('./DeviceNameType');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const DeviceDeviceNameSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  type: DeviceNameTypeSchema,
  typeName: { type: String, default: 'DeviceDeviceName' },
  _type: { type: String, default: 'FHIR::DeviceDeviceName' },
});

class DeviceDeviceName extends mongoose.Document {
  constructor(object) {
    super(object, DeviceDeviceNameSchema);
    this.typeName = 'DeviceDeviceName';
    this._type = 'FHIR::DeviceDeviceName';
  }
}

module.exports.DeviceDeviceNameSchema = DeviceDeviceNameSchema;
module.exports.DeviceDeviceName = DeviceDeviceName;
