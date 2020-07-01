const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ActionSelectionBehaviorSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ActionSelectionBehavior' },
  _type: { type: String, default: 'FHIR::ActionSelectionBehavior' },
});

class ActionSelectionBehavior extends mongoose.Document {
  constructor(object) {
    super(object, ActionSelectionBehaviorSchema);
    this.typeName = 'ActionSelectionBehavior';
    this._type = 'FHIR::ActionSelectionBehavior';
  }
}

module.exports.ActionSelectionBehaviorSchema = ActionSelectionBehaviorSchema;
module.exports.ActionSelectionBehavior = ActionSelectionBehavior;
