const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { PropertyTypeSchema } = require('./PropertyType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CodeSystemPropertySchema = BackboneElementSchemaFunction({
   code : String,
   uri : String,
   description : String,
   type : PropertyTypeSchema,
   fhirTitle: { type: String, default: 'CodeSystemProperty' },
});

class CodeSystemProperty extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemPropertySchema);
    this._type = 'FHIR::CodeSystemProperty';
  }
};


module.exports.CodeSystemPropertySchema = CodeSystemPropertySchema;
module.exports.CodeSystemProperty = CodeSystemProperty;
