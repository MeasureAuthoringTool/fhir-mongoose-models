const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ActionRequiredBehaviorSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ActionRequiredBehavior' },
  _type: { type: String, default: 'FHIR::ActionRequiredBehavior' },
});

class ActionRequiredBehavior extends mongoose.Document {
  constructor(object) {
    super(object, ActionRequiredBehaviorSchema);
    this.typeName = 'ActionRequiredBehavior';
    this._type = 'FHIR::ActionRequiredBehavior';
  }
}

module.exports.ActionRequiredBehaviorSchema = ActionRequiredBehaviorSchema;
module.exports.ActionRequiredBehavior = ActionRequiredBehavior;
