const { CodingSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { DataRequirementCodeFilterSchema } = require('./allSchemaHeaders.js');

DataRequirementCodeFilterSchema.add(ElementSchema);
DataRequirementCodeFilterSchema.remove('id');
DataRequirementCodeFilterSchema.add({
  path: PrimitiveStringSchema,
  searchParam: PrimitiveStringSchema,
  valueSet: PrimitiveCanonicalSchema,
  code: [CodingSchema],
});

module.exports.DataRequirementCodeFilterSchema = DataRequirementCodeFilterSchema;
