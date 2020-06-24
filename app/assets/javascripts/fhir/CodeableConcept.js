const mongoose = require('mongoose/browser');
const { CodingSchema } = require('./Coding');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CodeableConceptSchema = ElementSchemaFunction({
   coding : [CodingSchema],
   text : String,
   fhirTitle: { type: String, default: 'CodeableConcept' },
});

class CodeableConcept extends mongoose.Document {
  constructor(object) {
    super(object, CodeableConceptSchema);
    this._type = 'FHIR::CodeableConcept';
  }
};


module.exports.CodeableConceptSchema = CodeableConceptSchema;
module.exports.CodeableConcept = CodeableConcept;
