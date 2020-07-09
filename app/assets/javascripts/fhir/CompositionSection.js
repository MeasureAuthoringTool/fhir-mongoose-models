const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { NarrativeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SectionModeSchema } = require('./allSchemaHeaders.js');
const { CompositionSectionSchema } = require('./allSchemaHeaders.js');

CompositionSectionSchema.add(BackboneElementSchema);
CompositionSectionSchema.remove('id');
CompositionSectionSchema.add({
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
});

module.exports.CompositionSectionSchema = CompositionSectionSchema;
