const { BackboneElementSchema } = require('./BackboneElement');
const { FilterOperatorSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { CodeSystemFilterSchema } = require('./allSchemaHeaders.js');

CodeSystemFilterSchema.add(BackboneElementSchema);
CodeSystemFilterSchema.remove('id');
CodeSystemFilterSchema.add({
  code: PrimitiveCodeSchema,
  description: PrimitiveStringSchema,
  operator: [FilterOperatorSchema],
  value: PrimitiveStringSchema,
});

module.exports.CodeSystemFilterSchema = CodeSystemFilterSchema;
