const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { NoteTypeSchema } = require('./NoteType');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ClaimResponseProcessNoteSchema = BackboneElementSchemaFunction({
  number: PrimitivePositiveIntSchema,
  type: NoteTypeSchema,
  text: PrimitiveStringSchema,
  language: CodeableConceptSchema,
  typeName: { type: String, default: 'ClaimResponseProcessNote' },
  _type: { type: String, default: 'FHIR::ClaimResponseProcessNote' },
});

class ClaimResponseProcessNote extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseProcessNoteSchema);
    this.typeName = 'ClaimResponseProcessNote';
    this._type = 'FHIR::ClaimResponseProcessNote';
  }
}

module.exports.ClaimResponseProcessNoteSchema = ClaimResponseProcessNoteSchema;
module.exports.ClaimResponseProcessNote = ClaimResponseProcessNote;
