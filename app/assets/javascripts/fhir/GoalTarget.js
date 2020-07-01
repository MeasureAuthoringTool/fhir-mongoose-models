const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DurationSchema } = require('./Duration');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { RatioSchema } = require('./Ratio');

const GoalTargetSchema = BackboneElementSchemaFunction({
  measure: CodeableConceptSchema,
  detailQuantity: QuantitySchema,
  detailRange: RangeSchema,
  detailCodeableConcept: CodeableConceptSchema,
  detailString: PrimitiveStringSchema,
  detailBoolean: PrimitiveBooleanSchema,
  detailInteger: PrimitiveIntegerSchema,
  detailRatio: RatioSchema,
  dueDate: PrimitiveDateSchema,
  dueDuration: DurationSchema,
  typeName: { type: String, default: 'GoalTarget' },
  _type: { type: String, default: 'FHIR::GoalTarget' },
});

class GoalTarget extends mongoose.Document {
  constructor(object) {
    super(object, GoalTargetSchema);
    this.typeName = 'GoalTarget';
    this._type = 'FHIR::GoalTarget';
  }
}

module.exports.GoalTargetSchema = GoalTargetSchema;
module.exports.GoalTarget = GoalTarget;
