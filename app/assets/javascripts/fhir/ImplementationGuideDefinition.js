const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ImplementationGuideDefinitionGroupingSchema } = require('./ImplementationGuideDefinitionGrouping');
const { ImplementationGuideDefinitionPageSchema } = require('./ImplementationGuideDefinitionPage');
const { ImplementationGuideDefinitionParameterSchema } = require('./ImplementationGuideDefinitionParameter');
const { ImplementationGuideDefinitionResourceSchema } = require('./ImplementationGuideDefinitionResource');
const { ImplementationGuideDefinitionTemplateSchema } = require('./ImplementationGuideDefinitionTemplate');

const ImplementationGuideDefinitionSchema = BackboneElementSchemaFunction({
  grouping: [ImplementationGuideDefinitionGroupingSchema],
  resource: [ImplementationGuideDefinitionResourceSchema],
  page: ImplementationGuideDefinitionPageSchema,
  parameter: [ImplementationGuideDefinitionParameterSchema],
  template: [ImplementationGuideDefinitionTemplateSchema],
  typeName: { type: String, default: 'ImplementationGuideDefinition' },
  _type: { type: String, default: 'FHIR::ImplementationGuideDefinition' },
});

class ImplementationGuideDefinition extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideDefinitionSchema);
    this.typeName = 'ImplementationGuideDefinition';
    this._type = 'FHIR::ImplementationGuideDefinition';
  }
}

module.exports.ImplementationGuideDefinitionSchema = ImplementationGuideDefinitionSchema;
module.exports.ImplementationGuideDefinition = ImplementationGuideDefinition;
