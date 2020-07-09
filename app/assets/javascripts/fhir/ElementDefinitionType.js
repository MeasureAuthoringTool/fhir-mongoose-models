const { ElementSchema } = require('./Element');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceVersionRulesSchema } = require('./allSchemaHeaders.js');
const { ElementDefinitionTypeSchema } = require('./allSchemaHeaders.js');

ElementDefinitionTypeSchema.add(ElementSchema);
ElementDefinitionTypeSchema.remove('id');
ElementDefinitionTypeSchema.add({
  code: PrimitiveUriSchema,
  targetProfile: [PrimitiveCanonicalSchema],
  versioning: ReferenceVersionRulesSchema,
});

module.exports.ElementDefinitionTypeSchema = ElementDefinitionTypeSchema;
