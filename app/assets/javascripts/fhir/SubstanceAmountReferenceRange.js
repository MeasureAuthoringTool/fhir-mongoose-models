const { ElementSchema } = require('./Element');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { SubstanceAmountReferenceRangeSchema } = require('./allSchemaHeaders.js');

SubstanceAmountReferenceRangeSchema.add(ElementSchema);
SubstanceAmountReferenceRangeSchema.remove('id');
SubstanceAmountReferenceRangeSchema.add({
  lowLimit: QuantitySchema,
  highLimit: QuantitySchema,
});

module.exports.SubstanceAmountReferenceRangeSchema = SubstanceAmountReferenceRangeSchema;
