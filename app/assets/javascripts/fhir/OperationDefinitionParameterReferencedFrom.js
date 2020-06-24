const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const OperationDefinitionParameterReferencedFromSchema = BackboneElementSchemaFunction({
   source : String,
   sourceId : String,
   fhirTitle: { type: String, default: 'OperationDefinitionParameterReferencedFrom' },
});

class OperationDefinitionParameterReferencedFrom extends mongoose.Document {
  constructor(object) {
    super(object, OperationDefinitionParameterReferencedFromSchema);
    this._type = 'FHIR::OperationDefinitionParameterReferencedFrom';
  }
};


module.exports.OperationDefinitionParameterReferencedFromSchema = OperationDefinitionParameterReferencedFromSchema;
module.exports.OperationDefinitionParameterReferencedFrom = OperationDefinitionParameterReferencedFrom;
