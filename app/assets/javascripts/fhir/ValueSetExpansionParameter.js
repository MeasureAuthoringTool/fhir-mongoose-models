const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ValueSetExpansionParameterSchema } = require('./allSchemaHeaders.js');

ValueSetExpansionParameterSchema.add(BackboneElementSchema);
ValueSetExpansionParameterSchema.remove('id');
ValueSetExpansionParameterSchema.add({
  name: PrimitiveStringSchema,
  valueString: PrimitiveStringSchema,
  valueBoolean: PrimitiveBooleanSchema,
  valueInteger: PrimitiveIntegerSchema,
  valueDecimal: PrimitiveDecimalSchema,
  valueUri: PrimitiveUriSchema,
  valueCode: PrimitiveCodeSchema,
  valueDateTime: PrimitiveDateTimeSchema,
});

module.exports.ValueSetExpansionParameterSchema = ValueSetExpansionParameterSchema;
