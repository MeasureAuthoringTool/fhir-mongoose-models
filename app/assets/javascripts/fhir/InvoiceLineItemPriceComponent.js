const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { InvoicePriceComponentTypeSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { InvoiceLineItemPriceComponentSchema } = require('./allSchemaHeaders.js');

InvoiceLineItemPriceComponentSchema.add(BackboneElementSchema);
InvoiceLineItemPriceComponentSchema.remove('id');
InvoiceLineItemPriceComponentSchema.add({
  type: InvoicePriceComponentTypeSchema,
  code: CodeableConceptSchema,
  factor: PrimitiveDecimalSchema,
  amount: MoneySchema,
});

module.exports.InvoiceLineItemPriceComponentSchema = InvoiceLineItemPriceComponentSchema;
