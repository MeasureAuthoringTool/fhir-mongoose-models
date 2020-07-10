const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { StructureMapGroupRuleDependentSchema } = require('./allSchemaHeaders.js');

StructureMapGroupRuleDependentSchema.add(BackboneElementSchema);
StructureMapGroupRuleDependentSchema.remove('id');
StructureMapGroupRuleDependentSchema.add({
  name: PrimitiveIdSchema,
  variable: [PrimitiveStringSchema],
});

module.exports.StructureMapGroupRuleDependentSchema = StructureMapGroupRuleDependentSchema;
