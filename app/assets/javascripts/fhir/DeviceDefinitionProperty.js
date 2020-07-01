const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { QuantitySchema } = require('./Quantity');

const DeviceDefinitionPropertySchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  valueQuantity: [QuantitySchema],
  valueCode: [CodeableConceptSchema],
  typeName: { type: String, default: 'DeviceDefinitionProperty' },
  _type: { type: String, default: 'FHIR::DeviceDefinitionProperty' },
});

class DeviceDefinitionProperty extends mongoose.Document {
  constructor(object) {
    super(object, DeviceDefinitionPropertySchema);
    this.typeName = 'DeviceDefinitionProperty';
    this._type = 'FHIR::DeviceDefinitionProperty';
  }
}

module.exports.DeviceDefinitionPropertySchema = DeviceDefinitionPropertySchema;
module.exports.DeviceDefinitionProperty = DeviceDefinitionProperty;
