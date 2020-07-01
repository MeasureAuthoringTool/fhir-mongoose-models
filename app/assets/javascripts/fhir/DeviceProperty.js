const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { QuantitySchema } = require('./Quantity');

const DevicePropertySchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  valueQuantity: [QuantitySchema],
  valueCode: [CodeableConceptSchema],
  typeName: { type: String, default: 'DeviceProperty' },
  _type: { type: String, default: 'FHIR::DeviceProperty' },
});

class DeviceProperty extends mongoose.Document {
  constructor(object) {
    super(object, DevicePropertySchema);
    this.typeName = 'DeviceProperty';
    this._type = 'FHIR::DeviceProperty';
  }
}

module.exports.DevicePropertySchema = DevicePropertySchema;
module.exports.DeviceProperty = DeviceProperty;
