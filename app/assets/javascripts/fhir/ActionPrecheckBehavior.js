const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ActionPrecheckBehaviorSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ActionPrecheckBehavior' },
  _type: { type: String, default: 'FHIR::ActionPrecheckBehavior' },
});

class ActionPrecheckBehavior extends mongoose.Document {
  constructor(object) {
    super(object, ActionPrecheckBehaviorSchema);
    this.typeName = 'ActionPrecheckBehavior';
    this._type = 'FHIR::ActionPrecheckBehavior';
  }
}

module.exports.ActionPrecheckBehaviorSchema = ActionPrecheckBehaviorSchema;
module.exports.ActionPrecheckBehavior = ActionPrecheckBehavior;
