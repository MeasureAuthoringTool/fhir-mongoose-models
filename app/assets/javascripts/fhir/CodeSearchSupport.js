const { ElementSchema } = require('./Element');
const { CodeSearchSupportSchema } = require('./allSchemaHeaders.js');

CodeSearchSupportSchema.add(ElementSchema);
CodeSearchSupportSchema.remove('id');
CodeSearchSupportSchema.add({
  value: String,
});

module.exports.CodeSearchSupportSchema = CodeSearchSupportSchema;
