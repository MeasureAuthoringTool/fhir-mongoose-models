const { BackboneElementSchema } = require('./BackboneElement');
const { ConceptMapGroupUnmappedModeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ConceptMapGroupUnmappedSchema } = require('./allSchemaHeaders.js');

ConceptMapGroupUnmappedSchema.add(BackboneElementSchema);
ConceptMapGroupUnmappedSchema.remove('id');
ConceptMapGroupUnmappedSchema.add({
  mode: ConceptMapGroupUnmappedModeSchema,
  code: PrimitiveCodeSchema,
  display: PrimitiveStringSchema,
  url: PrimitiveCanonicalSchema,
});

module.exports.ConceptMapGroupUnmappedSchema = ConceptMapGroupUnmappedSchema;
