const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { MimeTypeSchema } = require('./MimeType');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ElementDefinitionMappingSchema = ElementSchemaFunction({
   identity : String,
   language : MimeTypeSchema,
   map : String,
   comment : String,
   fhirTitle: { type: String, default: 'ElementDefinitionMapping' },
});

class ElementDefinitionMapping extends mongoose.Document {
  constructor(object) {
    super(object, ElementDefinitionMappingSchema);
    this._type = 'FHIR::ElementDefinitionMapping';
  }
};


module.exports.ElementDefinitionMappingSchema = ElementDefinitionMappingSchema;
module.exports.ElementDefinitionMapping = ElementDefinitionMapping;
