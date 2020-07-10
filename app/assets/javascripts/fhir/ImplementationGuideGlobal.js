const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { ResourceTypeSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideGlobalSchema } = require('./allSchemaHeaders.js');

ImplementationGuideGlobalSchema.add(BackboneElementSchema);
ImplementationGuideGlobalSchema.remove('id');
ImplementationGuideGlobalSchema.add({
  type: ResourceTypeSchema,
  profile: PrimitiveCanonicalSchema,
});

module.exports.ImplementationGuideGlobalSchema = ImplementationGuideGlobalSchema;
