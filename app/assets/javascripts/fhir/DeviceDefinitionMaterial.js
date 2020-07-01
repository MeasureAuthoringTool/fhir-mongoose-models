const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');

const DeviceDefinitionMaterialSchema = BackboneElementSchemaFunction({
  substance: CodeableConceptSchema,
  alternate: PrimitiveBooleanSchema,
  allergenicIndicator: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'DeviceDefinitionMaterial' },
  _type: { type: String, default: 'FHIR::DeviceDefinitionMaterial' },
});

class DeviceDefinitionMaterial extends mongoose.Document {
  constructor(object) {
    super(object, DeviceDefinitionMaterialSchema);
    this.typeName = 'DeviceDefinitionMaterial';
    this._type = 'FHIR::DeviceDefinitionMaterial';
  }
}

module.exports.DeviceDefinitionMaterialSchema = DeviceDefinitionMaterialSchema;
module.exports.DeviceDefinitionMaterial = DeviceDefinitionMaterial;
