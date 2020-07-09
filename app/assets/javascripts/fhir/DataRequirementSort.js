const { ElementSchema } = require('./Element');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SortDirectionSchema } = require('./allSchemaHeaders.js');
const { DataRequirementSortSchema } = require('./allSchemaHeaders.js');

DataRequirementSortSchema.add(ElementSchema);
DataRequirementSortSchema.remove('id');
DataRequirementSortSchema.add({
  path: PrimitiveStringSchema,
  direction: SortDirectionSchema,
});

module.exports.DataRequirementSortSchema = DataRequirementSortSchema;
