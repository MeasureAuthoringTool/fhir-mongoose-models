const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PeriodSchema } = require('./Period');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');

const TaskRestrictionSchema = BackboneElementSchemaFunction({
  repetitions: PrimitivePositiveIntSchema,
  period: PeriodSchema,
  recipient: [ReferenceSchema],
  typeName: { type: String, default: 'TaskRestriction' },
  _type: { type: String, default: 'FHIR::TaskRestriction' },
});

class TaskRestriction extends mongoose.Document {
  constructor(object) {
    super(object, TaskRestrictionSchema);
    this.typeName = 'TaskRestriction';
    this._type = 'FHIR::TaskRestriction';
  }
}

module.exports.TaskRestrictionSchema = TaskRestrictionSchema;
module.exports.TaskRestriction = TaskRestriction;
