const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CodeSystemConceptPropertySchema = BackboneElementSchemaFunction({
   code : String,
   valueCode : String,
   valueCoding : CodingSchema,
   valueString : String,
   valueInteger : Number,
   valueBoolean : Boolean,
   valueDateTime : DateTime,
   valueDecimal : Number,
   fhirTitle: { type: String, default: 'CodeSystemConceptProperty' },
});

class CodeSystemConceptProperty extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemConceptPropertySchema);
    this._type = 'FHIR::CodeSystemConceptProperty';
  }
};


module.exports.CodeSystemConceptPropertySchema = CodeSystemConceptPropertySchema;
module.exports.CodeSystemConceptProperty = CodeSystemConceptProperty;
