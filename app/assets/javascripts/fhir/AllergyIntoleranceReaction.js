const mongoose = require('mongoose/browser');
const { AllergyIntoleranceSeveritySchema } = require('./AllergyIntoleranceSeverity');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const AllergyIntoleranceReactionSchema = BackboneElementSchemaFunction({
  substance: CodeableConceptSchema,
  manifestation: [CodeableConceptSchema],
  description: PrimitiveStringSchema,
  onset: PrimitiveDateTimeSchema,
  severity: AllergyIntoleranceSeveritySchema,
  exposureRoute: CodeableConceptSchema,
  note: [AnnotationSchema],
  typeName: { type: String, default: 'AllergyIntoleranceReaction' },
  _type: { type: String, default: 'FHIR::AllergyIntoleranceReaction' },
});

class AllergyIntoleranceReaction extends mongoose.Document {
  constructor(object) {
    super(object, AllergyIntoleranceReactionSchema);
    this.typeName = 'AllergyIntoleranceReaction';
    this._type = 'FHIR::AllergyIntoleranceReaction';
  }
}

module.exports.AllergyIntoleranceReactionSchema = AllergyIntoleranceReactionSchema;
module.exports.AllergyIntoleranceReaction = AllergyIntoleranceReaction;
