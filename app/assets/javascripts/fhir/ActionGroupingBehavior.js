const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ActionGroupingBehaviorSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ActionGroupingBehavior' },
});

class ActionGroupingBehavior extends mongoose.Document {
  constructor(object) {
    super(object, ActionGroupingBehaviorSchema);
    this._type = 'FHIR::ActionGroupingBehavior';
  }
};


module.exports.ActionGroupingBehaviorSchema = ActionGroupingBehaviorSchema;
module.exports.ActionGroupingBehavior = ActionGroupingBehavior;
