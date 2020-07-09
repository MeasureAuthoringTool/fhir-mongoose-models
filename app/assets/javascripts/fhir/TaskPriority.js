const { ElementSchema } = require('./Element');
const { TaskPrioritySchema } = require('./allSchemaHeaders.js');

TaskPrioritySchema.add(ElementSchema);
TaskPrioritySchema.remove('id');
TaskPrioritySchema.add({
  value: String,
});

module.exports.TaskPrioritySchema = TaskPrioritySchema;
