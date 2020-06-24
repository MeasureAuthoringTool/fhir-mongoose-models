const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TaskRestrictionSchema = BackboneElementSchemaFunction({
   repetitions : Number,
   period : PeriodSchema,
   recipient : [ReferenceSchema],
   fhirTitle: { type: String, default: 'TaskRestriction' },
});

class TaskRestriction extends mongoose.Document {
  constructor(object) {
    super(object, TaskRestrictionSchema);
    this._type = 'FHIR::TaskRestriction';
  }
};


module.exports.TaskRestrictionSchema = TaskRestrictionSchema;
module.exports.TaskRestriction = TaskRestriction;
