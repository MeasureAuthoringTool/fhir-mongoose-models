const mongoose = require('mongoose/browser');
const { BindingStrengthSchema } = require('./BindingStrength');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ElementDefinitionBindingSchema = ElementSchemaFunction({
   strength : BindingStrengthSchema,
   description : String,
   valueSet : String,
   fhirTitle: { type: String, default: 'ElementDefinitionBinding' },
});

class ElementDefinitionBinding extends mongoose.Document {
  constructor(object) {
    super(object, ElementDefinitionBindingSchema);
    this._type = 'FHIR::ElementDefinitionBinding';
  }
};


module.exports.ElementDefinitionBindingSchema = ElementDefinitionBindingSchema;
module.exports.ElementDefinitionBinding = ElementDefinitionBinding;
