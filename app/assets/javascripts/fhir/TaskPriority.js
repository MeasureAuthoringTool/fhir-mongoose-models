const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TaskPrioritySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'TaskPriority' },
});

class TaskPriority extends mongoose.Document {
  constructor(object) {
    super(object, TaskPrioritySchema);
    this._type = 'FHIR::TaskPriority';
  }
};


module.exports.TaskPrioritySchema = TaskPrioritySchema;
module.exports.TaskPriority = TaskPriority;
