const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { DeviceNameTypeSchema } = require('./DeviceNameType');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const DeviceDefinitionDeviceNameSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  type: DeviceNameTypeSchema,
  typeName: { type: String, default: 'DeviceDefinitionDeviceName' },
  _type: { type: String, default: 'FHIR::DeviceDefinitionDeviceName' },
});

class DeviceDefinitionDeviceName extends mongoose.Document {
  constructor(object) {
    super(object, DeviceDefinitionDeviceNameSchema);
    this.typeName = 'DeviceDefinitionDeviceName';
    this._type = 'FHIR::DeviceDefinitionDeviceName';
  }
}

module.exports.DeviceDefinitionDeviceNameSchema = DeviceDefinitionDeviceNameSchema;
module.exports.DeviceDefinitionDeviceName = DeviceDefinitionDeviceName;
