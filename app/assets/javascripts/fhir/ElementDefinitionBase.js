const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ElementDefinitionBaseSchema = ElementSchemaFunction({
   path : String,
   min : Number,
   max : String,
   fhirTitle: { type: String, default: 'ElementDefinitionBase' },
});

class ElementDefinitionBase extends mongoose.Document {
  constructor(object) {
    super(object, ElementDefinitionBaseSchema);
    this._type = 'FHIR::ElementDefinitionBase';
  }
};


module.exports.ElementDefinitionBaseSchema = ElementDefinitionBaseSchema;
module.exports.ElementDefinitionBase = ElementDefinitionBase;
