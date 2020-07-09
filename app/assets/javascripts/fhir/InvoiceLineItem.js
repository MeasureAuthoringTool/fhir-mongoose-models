const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { InvoiceLineItemPriceComponentSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { InvoiceLineItemSchema } = require('./allSchemaHeaders.js');

InvoiceLineItemSchema.add(BackboneElementSchema);
InvoiceLineItemSchema.remove('id');
InvoiceLineItemSchema.add({
  sequence: PrimitivePositiveIntSchema,
  chargeItemReference: ReferenceSchema,
  chargeItemCodeableConcept: CodeableConceptSchema,
  priceComponent: [InvoiceLineItemPriceComponentSchema],
});

module.exports.InvoiceLineItemSchema = InvoiceLineItemSchema;
