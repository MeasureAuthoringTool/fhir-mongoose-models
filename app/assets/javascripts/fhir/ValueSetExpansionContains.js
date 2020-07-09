const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ValueSetComposeIncludeConceptDesignationSchema } = require('./allSchemaHeaders.js');
const { ValueSetExpansionContainsSchema } = require('./allSchemaHeaders.js');

ValueSetExpansionContainsSchema.add(BackboneElementSchema);
ValueSetExpansionContainsSchema.remove('id');
ValueSetExpansionContainsSchema.add({
  system: PrimitiveUriSchema,
  abstract: PrimitiveBooleanSchema,
  inactive: PrimitiveBooleanSchema,
  version: PrimitiveStringSchema,
  code: PrimitiveCodeSchema,
  display: PrimitiveStringSchema,
  designation: [ValueSetComposeIncludeConceptDesignationSchema],
  contains: [ValueSetExpansionContainsSchema],
});

module.exports.ValueSetExpansionContainsSchema = ValueSetExpansionContainsSchema;
