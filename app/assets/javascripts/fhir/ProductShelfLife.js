const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { ProductShelfLifeSchema } = require('./allSchemaHeaders.js');

ProductShelfLifeSchema.add(BackboneElementSchema);
ProductShelfLifeSchema.remove('id');
ProductShelfLifeSchema.add({
  identifier: IdentifierSchema,
  type: CodeableConceptSchema,
  period: QuantitySchema,
  specialPrecautionsForStorage: [CodeableConceptSchema],
});

module.exports.ProductShelfLifeSchema = ProductShelfLifeSchema;
