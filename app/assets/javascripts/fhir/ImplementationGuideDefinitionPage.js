const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { GuidePageGenerationSchema } = require('./GuidePageGeneration');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImplementationGuideDefinitionPageSchema = BackboneElementSchemaFunction({
   nameUrl : String,
   nameReference : ReferenceSchema,
   title : String,
   generation : GuidePageGenerationSchema,
   page : [ImplementationGuideDefinitionPageSchema],
   fhirTitle: { type: String, default: 'ImplementationGuideDefinitionPage' },
});

class ImplementationGuideDefinitionPage extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideDefinitionPageSchema);
    this._type = 'FHIR::ImplementationGuideDefinitionPage';
  }
};


module.exports.ImplementationGuideDefinitionPageSchema = ImplementationGuideDefinitionPageSchema;
module.exports.ImplementationGuideDefinitionPage = ImplementationGuideDefinitionPage;
