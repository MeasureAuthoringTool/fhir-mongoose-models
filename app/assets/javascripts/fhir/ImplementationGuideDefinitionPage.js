const { BackboneElementSchema } = require('./BackboneElement');
const { GuidePageGenerationSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUrlSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideDefinitionPageSchema } = require('./allSchemaHeaders.js');

ImplementationGuideDefinitionPageSchema.add(BackboneElementSchema);
ImplementationGuideDefinitionPageSchema.remove('id');
ImplementationGuideDefinitionPageSchema.add({
  nameUrl: PrimitiveUrlSchema,
  nameReference: ReferenceSchema,
  title: PrimitiveStringSchema,
  generation: GuidePageGenerationSchema,
  page: [ImplementationGuideDefinitionPageSchema],
});

module.exports.ImplementationGuideDefinitionPageSchema = ImplementationGuideDefinitionPageSchema;
