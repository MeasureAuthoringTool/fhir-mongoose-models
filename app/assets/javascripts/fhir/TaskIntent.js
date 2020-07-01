const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const TaskIntentSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'TaskIntent' },
  _type: { type: String, default: 'FHIR::TaskIntent' },
});

class TaskIntent extends mongoose.Document {
  constructor(object) {
    super(object, TaskIntentSchema);
    this.typeName = 'TaskIntent';
    this._type = 'FHIR::TaskIntent';
  }
}

module.exports.TaskIntentSchema = TaskIntentSchema;
module.exports.TaskIntent = TaskIntent;
