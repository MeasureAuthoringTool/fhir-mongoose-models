const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ActionConditionKindSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ActionConditionKind' },
});

class ActionConditionKind extends mongoose.Document {
  constructor(object) {
    super(object, ActionConditionKindSchema);
    this._type = 'FHIR::ActionConditionKind';
  }
};


module.exports.ActionConditionKindSchema = ActionConditionKindSchema;
module.exports.ActionConditionKind = ActionConditionKind;
