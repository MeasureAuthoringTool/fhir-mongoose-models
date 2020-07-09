const { ElementSchema } = require('./Element');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');

RatioSchema.add(ElementSchema);
RatioSchema.remove('id');
RatioSchema.add({
  numerator: QuantitySchema,
  denominator: QuantitySchema,
});

module.exports.RatioSchema = RatioSchema;
