const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ActionRequiredBehaviorSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ActionRequiredBehavior' },
});

class ActionRequiredBehavior extends mongoose.Document {
  constructor(object) {
    super(object, ActionRequiredBehaviorSchema);
    this._type = 'FHIR::ActionRequiredBehavior';
  }
};


module.exports.ActionRequiredBehaviorSchema = ActionRequiredBehaviorSchema;
module.exports.ActionRequiredBehavior = ActionRequiredBehavior;
