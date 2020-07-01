const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ExpressionSchema } = require('./Expression');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const PlanDefinitionActionDynamicValueSchema = BackboneElementSchemaFunction({
  path: PrimitiveStringSchema,
  expression: ExpressionSchema,
  typeName: { type: String, default: 'PlanDefinitionActionDynamicValue' },
  _type: { type: String, default: 'FHIR::PlanDefinitionActionDynamicValue' },
});

class PlanDefinitionActionDynamicValue extends mongoose.Document {
  constructor(object) {
    super(object, PlanDefinitionActionDynamicValueSchema);
    this.typeName = 'PlanDefinitionActionDynamicValue';
    this._type = 'FHIR::PlanDefinitionActionDynamicValue';
  }
}

module.exports.PlanDefinitionActionDynamicValueSchema = PlanDefinitionActionDynamicValueSchema;
module.exports.PlanDefinitionActionDynamicValue = PlanDefinitionActionDynamicValue;
