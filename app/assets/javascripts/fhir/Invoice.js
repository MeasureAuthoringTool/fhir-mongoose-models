const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { InvoiceLineItemPriceComponentSchema } = require('./InvoiceLineItemPriceComponent');
const { InvoiceLineItemSchema } = require('./InvoiceLineItem');
const { InvoiceParticipantSchema } = require('./InvoiceParticipant');
const { InvoiceStatusSchema } = require('./InvoiceStatus');
const { MoneySchema } = require('./Money');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InvoiceSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : InvoiceStatusSchema,
   cancelledReason : String,
   type : CodeableConceptSchema,
   subject : ReferenceSchema,
   recipient : ReferenceSchema,
   date : DateTime,
   participant : [InvoiceParticipantSchema],
   issuer : ReferenceSchema,
   account : ReferenceSchema,
   lineItem : [InvoiceLineItemSchema],
   totalPriceComponent : [InvoiceLineItemPriceComponentSchema],
   totalNet : MoneySchema,
   totalGross : MoneySchema,
   paymentTerms : String,
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'Invoice' },
});

class Invoice extends mongoose.Document {
  constructor(object) {
    super(object, InvoiceSchema);
    this._type = 'FHIR::Invoice';
  }
};


module.exports.InvoiceSchema = InvoiceSchema;
module.exports.Invoice = Invoice;
