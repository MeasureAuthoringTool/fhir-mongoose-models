const { ElementSchema } = require('./Element');
const { CodeSystemContentModeSchema } = require('./allSchemaHeaders.js');

CodeSystemContentModeSchema.add(ElementSchema);
CodeSystemContentModeSchema.remove('id');
CodeSystemContentModeSchema.add({
  value: String,
});

module.exports.CodeSystemContentModeSchema = CodeSystemContentModeSchema;
