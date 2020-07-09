const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { DeviceDefinitionMaterialSchema } = require('./allSchemaHeaders.js');

DeviceDefinitionMaterialSchema.add(BackboneElementSchema);
DeviceDefinitionMaterialSchema.remove('id');
DeviceDefinitionMaterialSchema.add({
  substance: CodeableConceptSchema,
  alternate: PrimitiveBooleanSchema,
  allergenicIndicator: PrimitiveBooleanSchema,
});

module.exports.DeviceDefinitionMaterialSchema = DeviceDefinitionMaterialSchema;
