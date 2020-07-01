const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const DeviceDefinitionSpecializationSchema = BackboneElementSchemaFunction({
  systemType: PrimitiveStringSchema,
  version: PrimitiveStringSchema,
  typeName: { type: String, default: 'DeviceDefinitionSpecialization' },
  _type: { type: String, default: 'FHIR::DeviceDefinitionSpecialization' },
});

class DeviceDefinitionSpecialization extends mongoose.Document {
  constructor(object) {
    super(object, DeviceDefinitionSpecializationSchema);
    this.typeName = 'DeviceDefinitionSpecialization';
    this._type = 'FHIR::DeviceDefinitionSpecialization';
  }
}

module.exports.DeviceDefinitionSpecializationSchema = DeviceDefinitionSpecializationSchema;
module.exports.DeviceDefinitionSpecialization = DeviceDefinitionSpecialization;
