const { CodingSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');

CodeableConceptSchema.add(ElementSchema);
CodeableConceptSchema.remove('id');
CodeableConceptSchema.add({
  coding: [CodingSchema],
  text: PrimitiveStringSchema,
});

module.exports.CodeableConceptSchema = CodeableConceptSchema;
