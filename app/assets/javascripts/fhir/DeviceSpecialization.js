const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const DeviceSpecializationSchema = BackboneElementSchemaFunction({
  systemType: CodeableConceptSchema,
  version: PrimitiveStringSchema,
  typeName: { type: String, default: 'DeviceSpecialization' },
  _type: { type: String, default: 'FHIR::DeviceSpecialization' },
});

class DeviceSpecialization extends mongoose.Document {
  constructor(object) {
    super(object, DeviceSpecializationSchema);
    this.typeName = 'DeviceSpecialization';
    this._type = 'FHIR::DeviceSpecialization';
  }
}

module.exports.DeviceSpecializationSchema = DeviceSpecializationSchema;
module.exports.DeviceSpecialization = DeviceSpecialization;
