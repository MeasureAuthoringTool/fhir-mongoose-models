const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const OperationDefinitionOverloadSchema = BackboneElementSchemaFunction({
   parameterName : [String],
   comment : String,
   fhirTitle: { type: String, default: 'OperationDefinitionOverload' },
});

class OperationDefinitionOverload extends mongoose.Document {
  constructor(object) {
    super(object, OperationDefinitionOverloadSchema);
    this._type = 'FHIR::OperationDefinitionOverload';
  }
};


module.exports.OperationDefinitionOverloadSchema = OperationDefinitionOverloadSchema;
module.exports.OperationDefinitionOverload = OperationDefinitionOverload;
