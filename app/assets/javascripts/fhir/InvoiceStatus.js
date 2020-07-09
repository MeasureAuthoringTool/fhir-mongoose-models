const { ElementSchema } = require('./Element');
const { InvoiceStatusSchema } = require('./allSchemaHeaders.js');

InvoiceStatusSchema.add(ElementSchema);
InvoiceStatusSchema.remove('id');
InvoiceStatusSchema.add({
  value: String,
});

module.exports.InvoiceStatusSchema = InvoiceStatusSchema;
