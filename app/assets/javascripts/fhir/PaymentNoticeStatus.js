const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PaymentNoticeStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'PaymentNoticeStatus' },
});

class PaymentNoticeStatus extends mongoose.Document {
  constructor(object) {
    super(object, PaymentNoticeStatusSchema);
    this._type = 'FHIR::PaymentNoticeStatus';
  }
};


module.exports.PaymentNoticeStatusSchema = PaymentNoticeStatusSchema;
module.exports.PaymentNoticeStatus = PaymentNoticeStatus;
