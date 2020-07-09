const { ElementSchema } = require('./Element');
const { GroupMeasureSchema } = require('./allSchemaHeaders.js');

GroupMeasureSchema.add(ElementSchema);
GroupMeasureSchema.remove('id');
GroupMeasureSchema.add({
  value: String,
});

module.exports.GroupMeasureSchema = GroupMeasureSchema;
