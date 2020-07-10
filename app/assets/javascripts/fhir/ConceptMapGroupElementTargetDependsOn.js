const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ConceptMapGroupElementTargetDependsOnSchema } = require('./allSchemaHeaders.js');

ConceptMapGroupElementTargetDependsOnSchema.add(BackboneElementSchema);
ConceptMapGroupElementTargetDependsOnSchema.remove('id');
ConceptMapGroupElementTargetDependsOnSchema.add({
  property: PrimitiveUriSchema,
  system: PrimitiveCanonicalSchema,
  value: PrimitiveStringSchema,
  display: PrimitiveStringSchema,
});

module.exports.ConceptMapGroupElementTargetDependsOnSchema = ConceptMapGroupElementTargetDependsOnSchema;
