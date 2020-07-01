const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const GoalLifecycleStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'GoalLifecycleStatus' },
  _type: { type: String, default: 'FHIR::GoalLifecycleStatus' },
});

class GoalLifecycleStatus extends mongoose.Document {
  constructor(object) {
    super(object, GoalLifecycleStatusSchema);
    this.typeName = 'GoalLifecycleStatus';
    this._type = 'FHIR::GoalLifecycleStatus';
  }
}

module.exports.GoalLifecycleStatusSchema = GoalLifecycleStatusSchema;
module.exports.GoalLifecycleStatus = GoalLifecycleStatus;
