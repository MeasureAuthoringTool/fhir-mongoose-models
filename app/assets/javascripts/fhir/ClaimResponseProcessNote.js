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

const ClaimResponseProcessNoteSchema = BackboneElementSchemaFunction({
   number : Number,
   type : NoteTypeSchema,
   text : String,
   language : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'ClaimResponseProcessNote' },
});

class ClaimResponseProcessNote extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseProcessNoteSchema);
    this._type = 'FHIR::ClaimResponseProcessNote';
  }
};


module.exports.ClaimResponseProcessNoteSchema = ClaimResponseProcessNoteSchema;
module.exports.ClaimResponseProcessNote = ClaimResponseProcessNote;
