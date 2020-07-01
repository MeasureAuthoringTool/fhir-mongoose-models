const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { NoteTypeSchema } = require('./NoteType');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ExplanationOfBenefitProcessNoteSchema = BackboneElementSchemaFunction({
  number: PrimitivePositiveIntSchema,
  type: NoteTypeSchema,
  text: PrimitiveStringSchema,
  language: CodeableConceptSchema,
  typeName: { type: String, default: 'ExplanationOfBenefitProcessNote' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitProcessNote' },
});

class ExplanationOfBenefitProcessNote extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitProcessNoteSchema);
    this.typeName = 'ExplanationOfBenefitProcessNote';
    this._type = 'FHIR::ExplanationOfBenefitProcessNote';
  }
}

module.exports.ExplanationOfBenefitProcessNoteSchema = ExplanationOfBenefitProcessNoteSchema;
module.exports.ExplanationOfBenefitProcessNote = ExplanationOfBenefitProcessNote;
