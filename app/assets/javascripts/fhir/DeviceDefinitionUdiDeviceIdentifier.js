const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const DeviceDefinitionUdiDeviceIdentifierSchema = BackboneElementSchemaFunction({
  deviceIdentifier: PrimitiveStringSchema,
  issuer: PrimitiveUriSchema,
  jurisdiction: PrimitiveUriSchema,
  typeName: { type: String, default: 'DeviceDefinitionUdiDeviceIdentifier' },
  _type: { type: String, default: 'FHIR::DeviceDefinitionUdiDeviceIdentifier' },
});

class DeviceDefinitionUdiDeviceIdentifier extends mongoose.Document {
  constructor(object) {
    super(object, DeviceDefinitionUdiDeviceIdentifierSchema);
    this.typeName = 'DeviceDefinitionUdiDeviceIdentifier';
    this._type = 'FHIR::DeviceDefinitionUdiDeviceIdentifier';
  }
}

module.exports.DeviceDefinitionUdiDeviceIdentifierSchema = DeviceDefinitionUdiDeviceIdentifierSchema;
module.exports.DeviceDefinitionUdiDeviceIdentifier = DeviceDefinitionUdiDeviceIdentifier;
