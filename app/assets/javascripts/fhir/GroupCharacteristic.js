const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');

const GroupCharacteristicSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  valueCodeableConcept: CodeableConceptSchema,
  valueBoolean: PrimitiveBooleanSchema,
  valueQuantity: QuantitySchema,
  valueRange: RangeSchema,
  valueReference: ReferenceSchema,
  exclude: PrimitiveBooleanSchema,
  period: PeriodSchema,
  typeName: { type: String, default: 'GroupCharacteristic' },
  _type: { type: String, default: 'FHIR::GroupCharacteristic' },
});

class GroupCharacteristic extends mongoose.Document {
  constructor(object) {
    super(object, GroupCharacteristicSchema);
    this.typeName = 'GroupCharacteristic';
    this._type = 'FHIR::GroupCharacteristic';
  }
}

module.exports.GroupCharacteristicSchema = GroupCharacteristicSchema;
module.exports.GroupCharacteristic = GroupCharacteristic;
