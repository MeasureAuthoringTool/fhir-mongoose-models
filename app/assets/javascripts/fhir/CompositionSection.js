const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { NarrativeSchema } = require('./Narrative');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { SectionModeSchema } = require('./SectionMode');

const CompositionSectionSchema = BackboneElementSchemaFunction({
  title: PrimitiveStringSchema,
  code: CodeableConceptSchema,
  author: [ReferenceSchema],
  focus: ReferenceSchema,
  text: NarrativeSchema,
  mode: SectionModeSchema,
  orderedBy: CodeableConceptSchema,
  entry: [ReferenceSchema],
  emptyReason: CodeableConceptSchema,
  section: [CompositionSectionSchema],
  typeName: { type: String, default: 'CompositionSection' },
  _type: { type: String, default: 'FHIR::CompositionSection' },
});

class CompositionSection extends mongoose.Document {
  constructor(object) {
    super(object, CompositionSectionSchema);
    this.typeName = 'CompositionSection';
    this._type = 'FHIR::CompositionSection';
  }
}

module.exports.CompositionSectionSchema = CompositionSectionSchema;
module.exports.CompositionSection = CompositionSection;
