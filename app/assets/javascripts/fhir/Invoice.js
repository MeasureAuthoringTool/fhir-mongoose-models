const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { InvoiceLineItemSchema } = require('./InvoiceLineItem');
const { InvoiceLineItemPriceComponentSchema } = require('./InvoiceLineItemPriceComponent');
const { InvoiceParticipantSchema } = require('./InvoiceParticipant');
const { InvoiceStatusSchema } = require('./InvoiceStatus');
const { MoneySchema } = require('./Money');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const InvoiceSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: InvoiceStatusSchema,
  cancelledReason: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  subject: ReferenceSchema,
  recipient: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  participant: [InvoiceParticipantSchema],
  issuer: ReferenceSchema,
  account: ReferenceSchema,
  lineItem: [InvoiceLineItemSchema],
  totalPriceComponent: [InvoiceLineItemPriceComponentSchema],
  totalNet: MoneySchema,
  totalGross: MoneySchema,
  paymentTerms: PrimitiveMarkdownSchema,
  note: [AnnotationSchema],
  typeName: { type: String, default: 'Invoice' },
  _type: { type: String, default: 'FHIR::Invoice' },
});

class Invoice extends mongoose.Document {
  constructor(object) {
    super(object, InvoiceSchema);
    this.typeName = 'Invoice';
    this._type = 'FHIR::Invoice';
  }
}

module.exports.InvoiceSchema = InvoiceSchema;
module.exports.Invoice = Invoice;
