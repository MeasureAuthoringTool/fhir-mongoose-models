const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PaymentNoticeStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'PaymentNoticeStatus' },
  _type: { type: String, default: 'FHIR::PaymentNoticeStatus' },
});

class PaymentNoticeStatus extends mongoose.Document {
  constructor(object) {
    super(object, PaymentNoticeStatusSchema);
    this.typeName = 'PaymentNoticeStatus';
    this._type = 'FHIR::PaymentNoticeStatus';
  }
}

module.exports.PaymentNoticeStatusSchema = PaymentNoticeStatusSchema;
module.exports.PaymentNoticeStatus = PaymentNoticeStatus;
