const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const TaskStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'TaskStatus' },
  _type: { type: String, default: 'FHIR::TaskStatus' },
});

class TaskStatus extends mongoose.Document {
  constructor(object) {
    super(object, TaskStatusSchema);
    this.typeName = 'TaskStatus';
    this._type = 'FHIR::TaskStatus';
  }
}

module.exports.TaskStatusSchema = TaskStatusSchema;
module.exports.TaskStatus = TaskStatus;
