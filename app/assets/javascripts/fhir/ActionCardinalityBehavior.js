const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ActionCardinalityBehaviorSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ActionCardinalityBehavior' },
});

class ActionCardinalityBehavior extends mongoose.Document {
  constructor(object) {
    super(object, ActionCardinalityBehaviorSchema);
    this._type = 'FHIR::ActionCardinalityBehavior';
  }
};


module.exports.ActionCardinalityBehaviorSchema = ActionCardinalityBehaviorSchema;
module.exports.ActionCardinalityBehavior = ActionCardinalityBehavior;
