const { ElementSchema } = require('./Element');
const { PaymentNoticeStatusSchema } = require('./allSchemaHeaders.js');

PaymentNoticeStatusSchema.add(ElementSchema);
PaymentNoticeStatusSchema.remove('id');
PaymentNoticeStatusSchema.add({
  value: String,
});

module.exports.PaymentNoticeStatusSchema = PaymentNoticeStatusSchema;
