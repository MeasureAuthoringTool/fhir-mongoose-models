const mongoose = require('mongoose/browser');
const { ActionConditionKindSchema } = require('./ActionConditionKind');
const { BackboneElementSchema } = require('./BackboneElement');
const { ExpressionSchema } = require('./Expression');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PlanDefinitionActionConditionSchema = BackboneElementSchemaFunction({
   kind : ActionConditionKindSchema,
   expression : ExpressionSchema,
   fhirTitle: { type: String, default: 'PlanDefinitionActionCondition' },
});

class PlanDefinitionActionCondition extends mongoose.Document {
  constructor(object) {
    super(object, PlanDefinitionActionConditionSchema);
    this._type = 'FHIR::PlanDefinitionActionCondition';
  }
};


module.exports.PlanDefinitionActionConditionSchema = PlanDefinitionActionConditionSchema;
module.exports.PlanDefinitionActionCondition = PlanDefinitionActionCondition;
