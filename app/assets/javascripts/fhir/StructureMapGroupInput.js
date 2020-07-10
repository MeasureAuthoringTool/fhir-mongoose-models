const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { StructureMapInputModeSchema } = require('./allSchemaHeaders.js');
const { StructureMapGroupInputSchema } = require('./allSchemaHeaders.js');

StructureMapGroupInputSchema.add(BackboneElementSchema);
StructureMapGroupInputSchema.remove('id');
StructureMapGroupInputSchema.add({
  name: PrimitiveIdSchema,
  type: PrimitiveStringSchema,
  mode: StructureMapInputModeSchema,
  documentation: PrimitiveStringSchema,
});

module.exports.StructureMapGroupInputSchema = StructureMapGroupInputSchema;
