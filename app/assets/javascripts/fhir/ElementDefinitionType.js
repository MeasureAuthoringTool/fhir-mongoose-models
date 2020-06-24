const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ReferenceVersionRulesSchema } = require('./ReferenceVersionRules');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ElementDefinitionTypeSchema = ElementSchemaFunction({
   code : String,
   targetProfile : [String],
   versioning : ReferenceVersionRulesSchema,
   fhirTitle: { type: String, default: 'ElementDefinitionType' },
});

class ElementDefinitionType extends mongoose.Document {
  constructor(object) {
    super(object, ElementDefinitionTypeSchema);
    this._type = 'FHIR::ElementDefinitionType';
  }
};


module.exports.ElementDefinitionTypeSchema = ElementDefinitionTypeSchema;
module.exports.ElementDefinitionType = ElementDefinitionType;
