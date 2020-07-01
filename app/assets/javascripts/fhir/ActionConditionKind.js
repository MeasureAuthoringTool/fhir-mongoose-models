const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ActionConditionKindSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ActionConditionKind' },
  _type: { type: String, default: 'FHIR::ActionConditionKind' },
});

class ActionConditionKind extends mongoose.Document {
  constructor(object) {
    super(object, ActionConditionKindSchema);
    this.typeName = 'ActionConditionKind';
    this._type = 'FHIR::ActionConditionKind';
  }
}

module.exports.ActionConditionKindSchema = ActionConditionKindSchema;
module.exports.ActionConditionKind = ActionConditionKind;
