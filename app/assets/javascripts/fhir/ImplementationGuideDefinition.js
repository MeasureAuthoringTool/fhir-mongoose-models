const { BackboneElementSchema } = require('./BackboneElement');
const { ImplementationGuideDefinitionGroupingSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideDefinitionPageSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideDefinitionParameterSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideDefinitionResourceSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideDefinitionTemplateSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideDefinitionSchema } = require('./allSchemaHeaders.js');

ImplementationGuideDefinitionSchema.add(BackboneElementSchema);
ImplementationGuideDefinitionSchema.remove('id');
ImplementationGuideDefinitionSchema.add({
  grouping: [ImplementationGuideDefinitionGroupingSchema],
  resource: [ImplementationGuideDefinitionResourceSchema],
  page: ImplementationGuideDefinitionPageSchema,
  parameter: [ImplementationGuideDefinitionParameterSchema],
  template: [ImplementationGuideDefinitionTemplateSchema],
});

module.exports.ImplementationGuideDefinitionSchema = ImplementationGuideDefinitionSchema;
