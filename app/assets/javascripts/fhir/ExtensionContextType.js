const { ElementSchema } = require('./Element');
const { ExtensionContextTypeSchema } = require('./allSchemaHeaders.js');

ExtensionContextTypeSchema.add(ElementSchema);
ExtensionContextTypeSchema.remove('id');
ExtensionContextTypeSchema.add({
  value: String,
});

module.exports.ExtensionContextTypeSchema = ExtensionContextTypeSchema;
