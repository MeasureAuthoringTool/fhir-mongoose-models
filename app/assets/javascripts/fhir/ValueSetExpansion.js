const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ValueSetExpansionContainsSchema } = require('./allSchemaHeaders.js');
const { ValueSetExpansionParameterSchema } = require('./allSchemaHeaders.js');
const { ValueSetExpansionSchema } = require('./allSchemaHeaders.js');

ValueSetExpansionSchema.add(BackboneElementSchema);
ValueSetExpansionSchema.remove('id');
ValueSetExpansionSchema.add({
  identifier: PrimitiveUriSchema,
  timestamp: PrimitiveDateTimeSchema,
  total: PrimitiveIntegerSchema,
  offset: PrimitiveIntegerSchema,
  parameter: [ValueSetExpansionParameterSchema],
  contains: [ValueSetExpansionContainsSchema],
});

module.exports.ValueSetExpansionSchema = ValueSetExpansionSchema;
