const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TaskIntentSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'TaskIntent' },
});

class TaskIntent extends mongoose.Document {
  constructor(object) {
    super(object, TaskIntentSchema);
    this._type = 'FHIR::TaskIntent';
  }
};


module.exports.TaskIntentSchema = TaskIntentSchema;
module.exports.TaskIntent = TaskIntent;
