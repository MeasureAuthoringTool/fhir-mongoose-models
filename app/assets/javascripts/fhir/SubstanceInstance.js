const { BackboneElementSchema } = require('./BackboneElement');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { SubstanceInstanceSchema } = require('./allSchemaHeaders.js');

SubstanceInstanceSchema.add(BackboneElementSchema);
SubstanceInstanceSchema.remove('id');
SubstanceInstanceSchema.add({
  identifier: IdentifierSchema,
  expiry: PrimitiveDateTimeSchema,
  quantity: SimpleQuantitySchema,
});

module.exports.SubstanceInstanceSchema = SubstanceInstanceSchema;
