const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { ObservationReferenceRangeSchema } = require('./allSchemaHeaders.js');

ObservationReferenceRangeSchema.add(BackboneElementSchema);
ObservationReferenceRangeSchema.remove('id');
ObservationReferenceRangeSchema.add({
  low: SimpleQuantitySchema,
  high: SimpleQuantitySchema,
  type: CodeableConceptSchema,
  appliesTo: [CodeableConceptSchema],
  age: RangeSchema,
  text: PrimitiveStringSchema,
});

module.exports.ObservationReferenceRangeSchema = ObservationReferenceRangeSchema;
