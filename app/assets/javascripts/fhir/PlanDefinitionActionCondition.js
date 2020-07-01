const mongoose = require('mongoose/browser');
const { ActionConditionKindSchema } = require('./ActionConditionKind');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ExpressionSchema } = require('./Expression');

const PlanDefinitionActionConditionSchema = BackboneElementSchemaFunction({
  kind: ActionConditionKindSchema,
  expression: ExpressionSchema,
  typeName: { type: String, default: 'PlanDefinitionActionCondition' },
  _type: { type: String, default: 'FHIR::PlanDefinitionActionCondition' },
});

class PlanDefinitionActionCondition extends mongoose.Document {
  constructor(object) {
    super(object, PlanDefinitionActionConditionSchema);
    this.typeName = 'PlanDefinitionActionCondition';
    this._type = 'FHIR::PlanDefinitionActionCondition';
  }
}

module.exports.PlanDefinitionActionConditionSchema = PlanDefinitionActionConditionSchema;
module.exports.PlanDefinitionActionCondition = PlanDefinitionActionCondition;
