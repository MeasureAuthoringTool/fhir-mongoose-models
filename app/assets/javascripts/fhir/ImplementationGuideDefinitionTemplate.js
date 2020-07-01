const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ImplementationGuideDefinitionTemplateSchema = BackboneElementSchemaFunction({
  code: PrimitiveCodeSchema,
  source: PrimitiveStringSchema,
  scope: PrimitiveStringSchema,
  typeName: { type: String, default: 'ImplementationGuideDefinitionTemplate' },
  _type: { type: String, default: 'FHIR::ImplementationGuideDefinitionTemplate' },
});

class ImplementationGuideDefinitionTemplate extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideDefinitionTemplateSchema);
    this.typeName = 'ImplementationGuideDefinitionTemplate';
    this._type = 'FHIR::ImplementationGuideDefinitionTemplate';
  }
}

module.exports.ImplementationGuideDefinitionTemplateSchema = ImplementationGuideDefinitionTemplateSchema;
module.exports.ImplementationGuideDefinitionTemplate = ImplementationGuideDefinitionTemplate;
