const { BackboneElementSchema } = require('./BackboneElement');
const { ConceptMapGroupElementSchema } = require('./allSchemaHeaders.js');
const { ConceptMapGroupUnmappedSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ConceptMapGroupSchema } = require('./allSchemaHeaders.js');

ConceptMapGroupSchema.add(BackboneElementSchema);
ConceptMapGroupSchema.remove('id');
ConceptMapGroupSchema.add({
  source: PrimitiveUriSchema,
  sourceVersion: PrimitiveStringSchema,
  target: PrimitiveUriSchema,
  targetVersion: PrimitiveStringSchema,
  element: [ConceptMapGroupElementSchema],
  unmapped: ConceptMapGroupUnmappedSchema,
});

module.exports.ConceptMapGroupSchema = ConceptMapGroupSchema;
