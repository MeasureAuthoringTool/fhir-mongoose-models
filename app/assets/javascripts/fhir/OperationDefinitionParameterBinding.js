const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BindingStrengthSchema } = require('./BindingStrength');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const OperationDefinitionParameterBindingSchema = BackboneElementSchemaFunction({
   strength : BindingStrengthSchema,
   valueSet : String,
   fhirTitle: { type: String, default: 'OperationDefinitionParameterBinding' },
});

class OperationDefinitionParameterBinding extends mongoose.Document {
  constructor(object) {
    super(object, OperationDefinitionParameterBindingSchema);
    this._type = 'FHIR::OperationDefinitionParameterBinding';
  }
};


module.exports.OperationDefinitionParameterBindingSchema = OperationDefinitionParameterBindingSchema;
module.exports.OperationDefinitionParameterBinding = OperationDefinitionParameterBinding;
