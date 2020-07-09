const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');

PrimitiveMarkdownSchema.add(PrimitiveStringSchema);
PrimitiveMarkdownSchema.remove('id');
PrimitiveMarkdownSchema.add({
});

module.exports.PrimitiveMarkdownSchema = PrimitiveMarkdownSchema;
