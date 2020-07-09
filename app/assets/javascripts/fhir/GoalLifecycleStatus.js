const { ElementSchema } = require('./Element');
const { GoalLifecycleStatusSchema } = require('./allSchemaHeaders.js');

GoalLifecycleStatusSchema.add(ElementSchema);
GoalLifecycleStatusSchema.remove('id');
GoalLifecycleStatusSchema.add({
  value: String,
});

module.exports.GoalLifecycleStatusSchema = GoalLifecycleStatusSchema;
