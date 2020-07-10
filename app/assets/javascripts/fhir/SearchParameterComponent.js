const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SearchParameterComponentSchema } = require('./allSchemaHeaders.js');

SearchParameterComponentSchema.add(BackboneElementSchema);
SearchParameterComponentSchema.remove('id');
SearchParameterComponentSchema.add({
  definition: PrimitiveCanonicalSchema,
  expression: PrimitiveStringSchema,
});

module.exports.SearchParameterComponentSchema = SearchParameterComponentSchema;
