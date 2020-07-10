const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { TimingRepeatSchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');

TimingSchema.add(BackboneElementSchema);
TimingSchema.remove('id');
TimingSchema.add({
  event: [PrimitiveDateTimeSchema],
  repeat: TimingRepeatSchema,
  code: CodeableConceptSchema,
});

module.exports.TimingSchema = TimingSchema;
