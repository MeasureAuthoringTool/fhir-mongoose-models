const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');

const DeviceRequestParameterSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  valueCodeableConcept: CodeableConceptSchema,
  valueQuantity: QuantitySchema,
  valueRange: RangeSchema,
  valueBoolean: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'DeviceRequestParameter' },
  _type: { type: String, default: 'FHIR::DeviceRequestParameter' },
});

class DeviceRequestParameter extends mongoose.Document {
  constructor(object) {
    super(object, DeviceRequestParameterSchema);
    this.typeName = 'DeviceRequestParameter';
    this._type = 'FHIR::DeviceRequestParameter';
  }
}

module.exports.DeviceRequestParameterSchema = DeviceRequestParameterSchema;
module.exports.DeviceRequestParameter = DeviceRequestParameter;
