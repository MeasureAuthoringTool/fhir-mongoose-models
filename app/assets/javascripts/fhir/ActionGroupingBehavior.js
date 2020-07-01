const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ActionGroupingBehaviorSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ActionGroupingBehavior' },
  _type: { type: String, default: 'FHIR::ActionGroupingBehavior' },
});

class ActionGroupingBehavior extends mongoose.Document {
  constructor(object) {
    super(object, ActionGroupingBehaviorSchema);
    this.typeName = 'ActionGroupingBehavior';
    this._type = 'FHIR::ActionGroupingBehavior';
  }
}

module.exports.ActionGroupingBehaviorSchema = ActionGroupingBehaviorSchema;
module.exports.ActionGroupingBehavior = ActionGroupingBehavior;
