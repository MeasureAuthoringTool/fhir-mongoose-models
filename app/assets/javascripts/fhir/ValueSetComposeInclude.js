const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ValueSetComposeIncludeConceptSchema } = require('./allSchemaHeaders.js');
const { ValueSetComposeIncludeFilterSchema } = require('./allSchemaHeaders.js');
const { ValueSetComposeIncludeSchema } = require('./allSchemaHeaders.js');

ValueSetComposeIncludeSchema.add(BackboneElementSchema);
ValueSetComposeIncludeSchema.remove('id');
ValueSetComposeIncludeSchema.add({
  system: PrimitiveUriSchema,
  version: PrimitiveStringSchema,
  concept: [ValueSetComposeIncludeConceptSchema],
  filter: [ValueSetComposeIncludeFilterSchema],
  valueSet: [PrimitiveCanonicalSchema],
});

module.exports.ValueSetComposeIncludeSchema = ValueSetComposeIncludeSchema;
