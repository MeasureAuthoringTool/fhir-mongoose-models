const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImplementationGuideDefinitionTemplateSchema = BackboneElementSchemaFunction({
   code : String,
   source : String,
   scope : String,
   fhirTitle: { type: String, default: 'ImplementationGuideDefinitionTemplate' },
});

class ImplementationGuideDefinitionTemplate extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideDefinitionTemplateSchema);
    this._type = 'FHIR::ImplementationGuideDefinitionTemplate';
  }
};


module.exports.ImplementationGuideDefinitionTemplateSchema = ImplementationGuideDefinitionTemplateSchema;
module.exports.ImplementationGuideDefinitionTemplate = ImplementationGuideDefinitionTemplate;
