const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PaymentReconciliationStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'PaymentReconciliationStatus' },
  _type: { type: String, default: 'FHIR::PaymentReconciliationStatus' },
});

class PaymentReconciliationStatus extends mongoose.Document {
  constructor(object) {
    super(object, PaymentReconciliationStatusSchema);
    this.typeName = 'PaymentReconciliationStatus';
    this._type = 'FHIR::PaymentReconciliationStatus';
  }
}

module.exports.PaymentReconciliationStatusSchema = PaymentReconciliationStatusSchema;
module.exports.PaymentReconciliationStatus = PaymentReconciliationStatus;
