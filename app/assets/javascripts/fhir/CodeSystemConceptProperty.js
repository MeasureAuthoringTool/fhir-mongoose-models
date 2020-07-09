const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { CodeSystemConceptPropertySchema } = require('./allSchemaHeaders.js');

CodeSystemConceptPropertySchema.add(BackboneElementSchema);
CodeSystemConceptPropertySchema.remove('id');
CodeSystemConceptPropertySchema.add({
  code: PrimitiveCodeSchema,
  valueCode: PrimitiveCodeSchema,
  valueCoding: CodingSchema,
  valueString: PrimitiveStringSchema,
  valueInteger: PrimitiveIntegerSchema,
  valueBoolean: PrimitiveBooleanSchema,
  valueDateTime: PrimitiveDateTimeSchema,
  valueDecimal: PrimitiveDecimalSchema,
});

module.exports.CodeSystemConceptPropertySchema = CodeSystemConceptPropertySchema;
