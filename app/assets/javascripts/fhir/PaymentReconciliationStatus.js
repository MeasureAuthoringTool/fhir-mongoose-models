const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PaymentReconciliationStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'PaymentReconciliationStatus' },
});

class PaymentReconciliationStatus extends mongoose.Document {
  constructor(object) {
    super(object, PaymentReconciliationStatusSchema);
    this._type = 'FHIR::PaymentReconciliationStatus';
  }
};


module.exports.PaymentReconciliationStatusSchema = PaymentReconciliationStatusSchema;
module.exports.PaymentReconciliationStatus = PaymentReconciliationStatus;
