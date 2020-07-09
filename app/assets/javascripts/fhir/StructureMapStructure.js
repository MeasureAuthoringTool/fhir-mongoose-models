const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { StructureMapModelModeSchema } = require('./allSchemaHeaders.js');
const { StructureMapStructureSchema } = require('./allSchemaHeaders.js');

StructureMapStructureSchema.add(BackboneElementSchema);
StructureMapStructureSchema.remove('id');
StructureMapStructureSchema.add({
  url: PrimitiveCanonicalSchema,
  mode: StructureMapModelModeSchema,
  alias: PrimitiveStringSchema,
  documentation: PrimitiveStringSchema,
});

module.exports.StructureMapStructureSchema = StructureMapStructureSchema;
