const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MoneySchema } = require('./Money');
const { PaymentNoticeStatusSchema } = require('./PaymentNoticeStatus');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PaymentNoticeSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : PaymentNoticeStatusSchema,
   request : ReferenceSchema,
   response : ReferenceSchema,
   created : DateTime,
   provider : ReferenceSchema,
   payment : ReferenceSchema,
   paymentDate : FHIRDate,
   payee : ReferenceSchema,
   recipient : ReferenceSchema,
   amount : MoneySchema,
   paymentStatus : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'PaymentNotice' },
});

class PaymentNotice extends mongoose.Document {
  constructor(object) {
    super(object, PaymentNoticeSchema);
    this._type = 'FHIR::PaymentNotice';
  }
};


module.exports.PaymentNoticeSchema = PaymentNoticeSchema;
module.exports.PaymentNotice = PaymentNotice;
