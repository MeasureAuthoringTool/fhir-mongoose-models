const { BackboneElementSchema } = require('./BackboneElement');
const { CompositionAttestationModeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CompositionAttesterSchema } = require('./allSchemaHeaders.js');

CompositionAttesterSchema.add(BackboneElementSchema);
CompositionAttesterSchema.remove('id');
CompositionAttesterSchema.add({
  mode: CompositionAttestationModeSchema,
  time: PrimitiveDateTimeSchema,
  party: ReferenceSchema,
});

module.exports.CompositionAttesterSchema = CompositionAttesterSchema;
