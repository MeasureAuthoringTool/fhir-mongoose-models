const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ImplementationGuideDefinitionGroupingSchema } = require('./ImplementationGuideDefinitionGrouping');
const { ImplementationGuideDefinitionPageSchema } = require('./ImplementationGuideDefinitionPage');
const { ImplementationGuideDefinitionParameterSchema } = require('./ImplementationGuideDefinitionParameter');
const { ImplementationGuideDefinitionResourceSchema } = require('./ImplementationGuideDefinitionResource');
const { ImplementationGuideDefinitionTemplateSchema } = require('./ImplementationGuideDefinitionTemplate');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImplementationGuideDefinitionSchema = BackboneElementSchemaFunction({
   grouping : [ImplementationGuideDefinitionGroupingSchema],
   resource : [ImplementationGuideDefinitionResourceSchema],
   page : ImplementationGuideDefinitionPageSchema,
   parameter : [ImplementationGuideDefinitionParameterSchema],
   template : [ImplementationGuideDefinitionTemplateSchema],
   fhirTitle: { type: String, default: 'ImplementationGuideDefinition' },
});

class ImplementationGuideDefinition extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideDefinitionSchema);
    this._type = 'FHIR::ImplementationGuideDefinition';
  }
};


module.exports.ImplementationGuideDefinitionSchema = ImplementationGuideDefinitionSchema;
module.exports.ImplementationGuideDefinition = ImplementationGuideDefinition;
