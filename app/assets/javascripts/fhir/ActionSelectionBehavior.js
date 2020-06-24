const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ActionSelectionBehaviorSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ActionSelectionBehavior' },
});

class ActionSelectionBehavior extends mongoose.Document {
  constructor(object) {
    super(object, ActionSelectionBehaviorSchema);
    this._type = 'FHIR::ActionSelectionBehavior';
  }
};


module.exports.ActionSelectionBehaviorSchema = ActionSelectionBehaviorSchema;
module.exports.ActionSelectionBehavior = ActionSelectionBehavior;
