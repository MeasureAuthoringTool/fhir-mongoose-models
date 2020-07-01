const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DurationSchema } = require('./Duration');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');

const PlanDefinitionGoalTargetSchema = BackboneElementSchemaFunction({
  measure: CodeableConceptSchema,
  detailQuantity: QuantitySchema,
  detailRange: RangeSchema,
  detailCodeableConcept: CodeableConceptSchema,
  due: DurationSchema,
  typeName: { type: String, default: 'PlanDefinitionGoalTarget' },
  _type: { type: String, default: 'FHIR::PlanDefinitionGoalTarget' },
});

class PlanDefinitionGoalTarget extends mongoose.Document {
  constructor(object) {
    super(object, PlanDefinitionGoalTargetSchema);
    this.typeName = 'PlanDefinitionGoalTarget';
    this._type = 'FHIR::PlanDefinitionGoalTarget';
  }
}

module.exports.PlanDefinitionGoalTargetSchema = PlanDefinitionGoalTargetSchema;
module.exports.PlanDefinitionGoalTarget = PlanDefinitionGoalTarget;
