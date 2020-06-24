const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { NoteTypeSchema } = require('./NoteType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExplanationOfBenefitProcessNoteSchema = BackboneElementSchemaFunction({
   number : Number,
   type : NoteTypeSchema,
   text : String,
   language : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'ExplanationOfBenefitProcessNote' },
});

class ExplanationOfBenefitProcessNote extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitProcessNoteSchema);
    this._type = 'FHIR::ExplanationOfBenefitProcessNote';
  }
};


module.exports.ExplanationOfBenefitProcessNoteSchema = ExplanationOfBenefitProcessNoteSchema;
module.exports.ExplanationOfBenefitProcessNote = ExplanationOfBenefitProcessNote;
