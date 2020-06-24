const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeSystemConceptDesignationSchema } = require('./CodeSystemConceptDesignation');
const { CodeSystemConceptPropertySchema } = require('./CodeSystemConceptProperty');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CodeSystemConceptSchema = BackboneElementSchemaFunction({
   code : String,
   display : String,
   definition : String,
   designation : [CodeSystemConceptDesignationSchema],
   property : [CodeSystemConceptPropertySchema],
   concept : [CodeSystemConceptSchema],
   fhirTitle: { type: String, default: 'CodeSystemConcept' },
});

class CodeSystemConcept extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemConceptSchema);
    this._type = 'FHIR::CodeSystemConcept';
  }
};


module.exports.CodeSystemConceptSchema = CodeSystemConceptSchema;
module.exports.CodeSystemConcept = CodeSystemConcept;
