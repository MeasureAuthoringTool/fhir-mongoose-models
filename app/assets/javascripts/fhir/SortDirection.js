const { ElementSchema } = require('./Element');
const { SortDirectionSchema } = require('./allSchemaHeaders.js');

SortDirectionSchema.add(ElementSchema);
SortDirectionSchema.remove('id');
SortDirectionSchema.add({
  value: String,
});

module.exports.SortDirectionSchema = SortDirectionSchema;
