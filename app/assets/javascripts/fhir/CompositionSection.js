const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { NarrativeSchema } = require('./Narrative');
const { ReferenceSchema } = require('./Reference');
const { SectionModeSchema } = require('./SectionMode');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CompositionSectionSchema = BackboneElementSchemaFunction({
   title : String,
   code : CodeableConceptSchema,
   author : [ReferenceSchema],
   focus : ReferenceSchema,
   text : NarrativeSchema,
   mode : SectionModeSchema,
   orderedBy : CodeableConceptSchema,
   entry : [ReferenceSchema],
   emptyReason : CodeableConceptSchema,
   section : [CompositionSectionSchema],
   fhirTitle: { type: String, default: 'CompositionSection' },
});

class CompositionSection extends mongoose.Document {
  constructor(object) {
    super(object, CompositionSectionSchema);
    this._type = 'FHIR::CompositionSection';
  }
};


module.exports.CompositionSectionSchema = CompositionSectionSchema;
module.exports.CompositionSection = CompositionSection;
