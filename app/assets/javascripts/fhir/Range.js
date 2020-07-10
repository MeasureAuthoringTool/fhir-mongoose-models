const { ElementSchema } = require('./Element');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');

RangeSchema.add(ElementSchema);
RangeSchema.remove('id');
RangeSchema.add({
  low: SimpleQuantitySchema,
  high: SimpleQuantitySchema,
});

module.exports.RangeSchema = RangeSchema;
