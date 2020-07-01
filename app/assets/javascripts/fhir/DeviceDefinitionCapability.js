const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');

const DeviceDefinitionCapabilitySchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  description: [CodeableConceptSchema],
  typeName: { type: String, default: 'DeviceDefinitionCapability' },
  _type: { type: String, default: 'FHIR::DeviceDefinitionCapability' },
});

class DeviceDefinitionCapability extends mongoose.Document {
  constructor(object) {
    super(object, DeviceDefinitionCapabilitySchema);
    this.typeName = 'DeviceDefinitionCapability';
    this._type = 'FHIR::DeviceDefinitionCapability';
  }
}

module.exports.DeviceDefinitionCapabilitySchema = DeviceDefinitionCapabilitySchema;
module.exports.DeviceDefinitionCapability = DeviceDefinitionCapability;
