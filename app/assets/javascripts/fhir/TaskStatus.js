const { ElementSchema } = require('./Element');
const { TaskStatusSchema } = require('./allSchemaHeaders.js');

TaskStatusSchema.add(ElementSchema);
TaskStatusSchema.remove('id');
TaskStatusSchema.add({
  value: String,
});

module.exports.TaskStatusSchema = TaskStatusSchema;
