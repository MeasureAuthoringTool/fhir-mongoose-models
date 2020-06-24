const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TaskStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'TaskStatus' },
});

class TaskStatus extends mongoose.Document {
  constructor(object) {
    super(object, TaskStatusSchema);
    this._type = 'FHIR::TaskStatus';
  }
};


module.exports.TaskStatusSchema = TaskStatusSchema;
module.exports.TaskStatus = TaskStatus;
