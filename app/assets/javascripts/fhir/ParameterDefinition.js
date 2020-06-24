const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { FHIRAllTypesSchema } = require('./FHIRAllTypes');
const { ParameterUseSchema } = require('./ParameterUse');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ParameterDefinitionSchema = ElementSchemaFunction({
   name : String,
   use : ParameterUseSchema,
   min : Number,
   max : String,
   documentation : String,
   type : FHIRAllTypesSchema,
   profile : String,
   fhirTitle: { type: String, default: 'ParameterDefinition' },
});

class ParameterDefinition extends mongoose.Document {
  constructor(object) {
    super(object, ParameterDefinitionSchema);
    this._type = 'FHIR::ParameterDefinition';
  }
};


module.exports.ParameterDefinitionSchema = ParameterDefinitionSchema;
module.exports.ParameterDefinition = ParameterDefinition;
