const { BackboneElementSchema } = require('./BackboneElement');
const { FilterOperatorSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ValueSetComposeIncludeFilterSchema } = require('./allSchemaHeaders.js');

ValueSetComposeIncludeFilterSchema.add(BackboneElementSchema);
ValueSetComposeIncludeFilterSchema.remove('id');
ValueSetComposeIncludeFilterSchema.add({
  property: PrimitiveCodeSchema,
  op: FilterOperatorSchema,
  value: PrimitiveStringSchema,
});

module.exports.ValueSetComposeIncludeFilterSchema = ValueSetComposeIncludeFilterSchema;
