const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ActionCardinalityBehaviorSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ActionCardinalityBehavior' },
  _type: { type: String, default: 'FHIR::ActionCardinalityBehavior' },
});

class ActionCardinalityBehavior extends mongoose.Document {
  constructor(object) {
    super(object, ActionCardinalityBehaviorSchema);
    this.typeName = 'ActionCardinalityBehavior';
    this._type = 'FHIR::ActionCardinalityBehavior';
  }
}

module.exports.ActionCardinalityBehaviorSchema = ActionCardinalityBehaviorSchema;
module.exports.ActionCardinalityBehavior = ActionCardinalityBehavior;
