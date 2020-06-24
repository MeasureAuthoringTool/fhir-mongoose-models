const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { GuideParameterCodeSchema } = require('./GuideParameterCode');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImplementationGuideDefinitionParameterSchema = BackboneElementSchemaFunction({
   code : GuideParameterCodeSchema,
   value : String,
   fhirTitle: { type: String, default: 'ImplementationGuideDefinitionParameter' },
});

class ImplementationGuideDefinitionParameter extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideDefinitionParameterSchema);
    this._type = 'FHIR::ImplementationGuideDefinitionParameter';
  }
};


module.exports.ImplementationGuideDefinitionParameterSchema = ImplementationGuideDefinitionParameterSchema;
module.exports.ImplementationGuideDefinitionParameter = ImplementationGuideDefinitionParameter;
