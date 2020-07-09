const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { SupplyDeliverySuppliedItemSchema } = require('./allSchemaHeaders.js');

SupplyDeliverySuppliedItemSchema.add(BackboneElementSchema);
SupplyDeliverySuppliedItemSchema.remove('id');
SupplyDeliverySuppliedItemSchema.add({
  quantity: SimpleQuantitySchema,
  itemCodeableConcept: CodeableConceptSchema,
  itemReference: ReferenceSchema,
});

module.exports.SupplyDeliverySuppliedItemSchema = SupplyDeliverySuppliedItemSchema;
