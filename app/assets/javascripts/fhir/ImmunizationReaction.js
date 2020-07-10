const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ImmunizationReactionSchema } = require('./allSchemaHeaders.js');

ImmunizationReactionSchema.add(BackboneElementSchema);
ImmunizationReactionSchema.remove('id');
ImmunizationReactionSchema.add({
  date: PrimitiveDateTimeSchema,
  detail: ReferenceSchema,
  reported: PrimitiveBooleanSchema,
});

module.exports.ImmunizationReactionSchema = ImmunizationReactionSchema;
