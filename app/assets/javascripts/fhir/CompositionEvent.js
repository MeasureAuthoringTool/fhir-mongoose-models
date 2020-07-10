const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CompositionEventSchema } = require('./allSchemaHeaders.js');

CompositionEventSchema.add(BackboneElementSchema);
CompositionEventSchema.remove('id');
CompositionEventSchema.add({
  code: [CodeableConceptSchema],
  period: PeriodSchema,
  detail: [ReferenceSchema],
});

module.exports.CompositionEventSchema = CompositionEventSchema;
