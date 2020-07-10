const { ElementSchema } = require('./Element');
const { TaskIntentSchema } = require('./allSchemaHeaders.js');

TaskIntentSchema.add(ElementSchema);
TaskIntentSchema.remove('id');
TaskIntentSchema.add({
  value: String,
});

module.exports.TaskIntentSchema = TaskIntentSchema;
