const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CodeSystemConceptDesignationSchema = BackboneElementSchemaFunction({
   language : String,
   use : CodingSchema,
   value : String,
   fhirTitle: { type: String, default: 'CodeSystemConceptDesignation' },
});

class CodeSystemConceptDesignation extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemConceptDesignationSchema);
    this._type = 'FHIR::CodeSystemConceptDesignation';
  }
};


module.exports.CodeSystemConceptDesignationSchema = CodeSystemConceptDesignationSchema;
module.exports.CodeSystemConceptDesignation = CodeSystemConceptDesignation;
