const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');

const SupplyRequestParameterSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  valueCodeableConcept: CodeableConceptSchema,
  valueQuantity: QuantitySchema,
  valueRange: RangeSchema,
  valueBoolean: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'SupplyRequestParameter' },
  _type: { type: String, default: 'FHIR::SupplyRequestParameter' },
});

class SupplyRequestParameter extends mongoose.Document {
  constructor(object) {
    super(object, SupplyRequestParameterSchema);
    this.typeName = 'SupplyRequestParameter';
    this._type = 'FHIR::SupplyRequestParameter';
  }
}

module.exports.SupplyRequestParameterSchema = SupplyRequestParameterSchema;
module.exports.SupplyRequestParameter = SupplyRequestParameter;
