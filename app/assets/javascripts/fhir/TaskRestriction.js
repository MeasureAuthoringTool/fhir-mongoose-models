const { BackboneElementSchema } = require('./BackboneElement');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { TaskRestrictionSchema } = require('./allSchemaHeaders.js');

TaskRestrictionSchema.add(BackboneElementSchema);
TaskRestrictionSchema.remove('id');
TaskRestrictionSchema.add({
  repetitions: PrimitivePositiveIntSchema,
  period: PeriodSchema,
  recipient: [ReferenceSchema],
});

module.exports.TaskRestrictionSchema = TaskRestrictionSchema;
