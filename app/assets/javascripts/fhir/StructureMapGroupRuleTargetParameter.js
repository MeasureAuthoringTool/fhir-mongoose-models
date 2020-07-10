const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { StructureMapGroupRuleTargetParameterSchema } = require('./allSchemaHeaders.js');

StructureMapGroupRuleTargetParameterSchema.add(BackboneElementSchema);
StructureMapGroupRuleTargetParameterSchema.remove('id');
StructureMapGroupRuleTargetParameterSchema.add({
  valueId: PrimitiveIdSchema,
  valueString: PrimitiveStringSchema,
  valueBoolean: PrimitiveBooleanSchema,
  valueInteger: PrimitiveIntegerSchema,
  valueDecimal: PrimitiveDecimalSchema,
});

module.exports.StructureMapGroupRuleTargetParameterSchema = StructureMapGroupRuleTargetParameterSchema;
