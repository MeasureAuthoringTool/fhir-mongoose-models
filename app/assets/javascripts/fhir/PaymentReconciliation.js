const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MoneySchema } = require('./Money');
const { PaymentReconciliationDetailSchema } = require('./PaymentReconciliationDetail');
const { PaymentReconciliationProcessNoteSchema } = require('./PaymentReconciliationProcessNote');
const { PaymentReconciliationStatusSchema } = require('./PaymentReconciliationStatus');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { RemittanceOutcomeSchema } = require('./RemittanceOutcome');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PaymentReconciliationSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : PaymentReconciliationStatusSchema,
   period : PeriodSchema,
   created : DateTime,
   paymentIssuer : ReferenceSchema,
   request : ReferenceSchema,
   requestor : ReferenceSchema,
   outcome : RemittanceOutcomeSchema,
   disposition : String,
   paymentDate : FHIRDate,
   paymentAmount : MoneySchema,
   paymentIdentifier : IdentifierSchema,
   detail : [PaymentReconciliationDetailSchema],
   formCode : CodeableConceptSchema,
   processNote : [PaymentReconciliationProcessNoteSchema],
   fhirTitle: { type: String, default: 'PaymentReconciliation' },
});

class PaymentReconciliation extends mongoose.Document {
  constructor(object) {
    super(object, PaymentReconciliationSchema);
    this._type = 'FHIR::PaymentReconciliation';
  }
};


module.exports.PaymentReconciliationSchema = PaymentReconciliationSchema;
module.exports.PaymentReconciliation = PaymentReconciliation;
