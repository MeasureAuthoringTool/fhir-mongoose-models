const { ElementSchema } = require('./Element');
const { InvoicePriceComponentTypeSchema } = require('./allSchemaHeaders.js');

InvoicePriceComponentTypeSchema.add(ElementSchema);
InvoicePriceComponentTypeSchema.remove('id');
InvoicePriceComponentTypeSchema.add({
  value: String,
});

module.exports.InvoicePriceComponentTypeSchema = InvoicePriceComponentTypeSchema;
