const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const TaskPrioritySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'TaskPriority' },
  _type: { type: String, default: 'FHIR::TaskPriority' },
});

class TaskPriority extends mongoose.Document {
  constructor(object) {
    super(object, TaskPrioritySchema);
    this.typeName = 'TaskPriority';
    this._type = 'FHIR::TaskPriority';
  }
}

module.exports.TaskPrioritySchema = TaskPrioritySchema;
module.exports.TaskPriority = TaskPriority;
