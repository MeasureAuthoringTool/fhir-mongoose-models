const { AllergyIntoleranceSeveritySchema } = require('./allSchemaHeaders.js');
const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { AllergyIntoleranceReactionSchema } = require('./allSchemaHeaders.js');

AllergyIntoleranceReactionSchema.add(BackboneElementSchema);
AllergyIntoleranceReactionSchema.remove('id');
AllergyIntoleranceReactionSchema.add({
  substance: CodeableConceptSchema,
  manifestation: [CodeableConceptSchema],
  description: PrimitiveStringSchema,
  onset: PrimitiveDateTimeSchema,
  severity: AllergyIntoleranceSeveritySchema,
  exposureRoute: CodeableConceptSchema,
  note: [AnnotationSchema],
});

module.exports.AllergyIntoleranceReactionSchema = AllergyIntoleranceReactionSchema;
