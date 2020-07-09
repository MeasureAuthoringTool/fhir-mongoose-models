const { ElementSchema } = require('./Element');
const { LinkageTypeSchema } = require('./allSchemaHeaders.js');

LinkageTypeSchema.add(ElementSchema);
LinkageTypeSchema.remove('id');
LinkageTypeSchema.add({
  value: String,
});

module.exports.LinkageTypeSchema = LinkageTypeSchema;
