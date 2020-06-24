const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GoalLifecycleStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'GoalLifecycleStatus' },
});

class GoalLifecycleStatus extends mongoose.Document {
  constructor(object) {
    super(object, GoalLifecycleStatusSchema);
    this._type = 'FHIR::GoalLifecycleStatus';
  }
};


module.exports.GoalLifecycleStatusSchema = GoalLifecycleStatusSchema;
module.exports.GoalLifecycleStatus = GoalLifecycleStatus;
