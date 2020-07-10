const { ElementSchema } = require('./Element');
const { GroupTypeSchema } = require('./allSchemaHeaders.js');

GroupTypeSchema.add(ElementSchema);
GroupTypeSchema.remove('id');
GroupTypeSchema.add({
  value: String,
});

module.exports.GroupTypeSchema = GroupTypeSchema;
