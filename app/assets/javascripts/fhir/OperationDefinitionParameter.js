const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { FHIRAllTypesSchema } = require('./FHIRAllTypes');
const { OperationDefinitionParameterBindingSchema } = require('./OperationDefinitionParameterBinding');
const { OperationDefinitionParameterReferencedFromSchema } = require('./OperationDefinitionParameterReferencedFrom');
const { OperationParameterUseSchema } = require('./OperationParameterUse');
const { SearchParamTypeSchema } = require('./SearchParamType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const OperationDefinitionParameterSchema = BackboneElementSchemaFunction({
   name : String,
   use : OperationParameterUseSchema,
   min : Number,
   max : String,
   documentation : String,
   type : FHIRAllTypesSchema,
   targetProfile : [String],
   searchType : SearchParamTypeSchema,
   binding : OperationDefinitionParameterBindingSchema,
   referencedFrom : [OperationDefinitionParameterReferencedFromSchema],
   part : [OperationDefinitionParameterSchema],
   fhirTitle: { type: String, default: 'OperationDefinitionParameter' },
});

class OperationDefinitionParameter extends mongoose.Document {
  constructor(object) {
    super(object, OperationDefinitionParameterSchema);
    this._type = 'FHIR::OperationDefinitionParameter';
  }
};


module.exports.OperationDefinitionParameterSchema = OperationDefinitionParameterSchema;
module.exports.OperationDefinitionParameter = OperationDefinitionParameter;
