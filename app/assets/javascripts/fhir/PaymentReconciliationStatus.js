const { ElementSchema } = require('./Element');
const { PaymentReconciliationStatusSchema } = require('./allSchemaHeaders.js');

PaymentReconciliationStatusSchema.add(ElementSchema);
PaymentReconciliationStatusSchema.remove('id');
PaymentReconciliationStatusSchema.add({
  value: String,
});

module.exports.PaymentReconciliationStatusSchema = PaymentReconciliationStatusSchema;
