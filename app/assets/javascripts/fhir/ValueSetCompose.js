const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { ValueSetComposeIncludeSchema } = require('./allSchemaHeaders.js');
const { ValueSetComposeSchema } = require('./allSchemaHeaders.js');

ValueSetComposeSchema.add(BackboneElementSchema);
ValueSetComposeSchema.remove('id');
ValueSetComposeSchema.add({
  lockedDate: PrimitiveDateSchema,
  inactive: PrimitiveBooleanSchema,
  include: [ValueSetComposeIncludeSchema],
  exclude: [ValueSetComposeIncludeSchema],
});

module.exports.ValueSetComposeSchema = ValueSetComposeSchema;
