const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { GuidePageGenerationSchema } = require('./GuidePageGeneration');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUrlSchema } = require('./PrimitiveUrl');
const { ReferenceSchema } = require('./Reference');

const ImplementationGuideDefinitionPageSchema = BackboneElementSchemaFunction({
  nameUrl: PrimitiveUrlSchema,
  nameReference: ReferenceSchema,
  title: PrimitiveStringSchema,
  generation: GuidePageGenerationSchema,
  page: [ImplementationGuideDefinitionPageSchema],
  typeName: { type: String, default: 'ImplementationGuideDefinitionPage' },
  _type: { type: String, default: 'FHIR::ImplementationGuideDefinitionPage' },
});

class ImplementationGuideDefinitionPage extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideDefinitionPageSchema);
    this.typeName = 'ImplementationGuideDefinitionPage';
    this._type = 'FHIR::ImplementationGuideDefinitionPage';
  }
}

module.exports.ImplementationGuideDefinitionPageSchema = ImplementationGuideDefinitionPageSchema;
module.exports.ImplementationGuideDefinitionPage = ImplementationGuideDefinitionPage;
