const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { MoneySchema } = require('./Money');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PaymentReconciliationDetailSchema = BackboneElementSchemaFunction({
   identifier : IdentifierSchema,
   predecessor : IdentifierSchema,
   type : CodeableConceptSchema,
   request : ReferenceSchema,
   submitter : ReferenceSchema,
   response : ReferenceSchema,
   date : FHIRDate,
   responsible : ReferenceSchema,
   payee : ReferenceSchema,
   amount : MoneySchema,
   fhirTitle: { type: String, default: 'PaymentReconciliationDetail' },
});

class PaymentReconciliationDetail extends mongoose.Document {
  constructor(object) {
    super(object, PaymentReconciliationDetailSchema);
    this._type = 'FHIR::PaymentReconciliationDetail';
  }
};


module.exports.PaymentReconciliationDetailSchema = PaymentReconciliationDetailSchema;
module.exports.PaymentReconciliationDetail = PaymentReconciliationDetail;
