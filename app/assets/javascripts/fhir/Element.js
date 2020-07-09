const { ExtensionSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./allSchemaHeaders.js');

ElementSchema.add({
  id: String,
  extension: [ExtensionSchema],
});

module.exports.ElementSchema = ElementSchema;
