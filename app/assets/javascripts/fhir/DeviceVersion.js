const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const DeviceVersionSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  component: IdentifierSchema,
  value: PrimitiveStringSchema,
  typeName: { type: String, default: 'DeviceVersion' },
  _type: { type: String, default: 'FHIR::DeviceVersion' },
});

class DeviceVersion extends mongoose.Document {
  constructor(object) {
    super(object, DeviceVersionSchema);
    this.typeName = 'DeviceVersion';
    this._type = 'FHIR::DeviceVersion';
  }
}

module.exports.DeviceVersionSchema = DeviceVersionSchema;
module.exports.DeviceVersion = DeviceVersion;
