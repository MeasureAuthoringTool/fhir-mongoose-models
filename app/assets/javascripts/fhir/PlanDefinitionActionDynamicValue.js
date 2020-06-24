const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ExpressionSchema } = require('./Expression');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PlanDefinitionActionDynamicValueSchema = BackboneElementSchemaFunction({
   path : String,
   expression : ExpressionSchema,
   fhirTitle: { type: String, default: 'PlanDefinitionActionDynamicValue' },
});

class PlanDefinitionActionDynamicValue extends mongoose.Document {
  constructor(object) {
    super(object, PlanDefinitionActionDynamicValueSchema);
    this._type = 'FHIR::PlanDefinitionActionDynamicValue';
  }
};


module.exports.PlanDefinitionActionDynamicValueSchema = PlanDefinitionActionDynamicValueSchema;
module.exports.PlanDefinitionActionDynamicValue = PlanDefinitionActionDynamicValue;
