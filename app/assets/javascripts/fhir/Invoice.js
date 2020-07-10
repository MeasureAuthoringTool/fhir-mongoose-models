const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { InvoiceLineItemSchema } = require('./allSchemaHeaders.js');
const { InvoiceLineItemPriceComponentSchema } = require('./allSchemaHeaders.js');
const { InvoiceParticipantSchema } = require('./allSchemaHeaders.js');
const { InvoiceStatusSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { InvoiceSchema } = require('./allSchemaHeaders.js');

InvoiceSchema.add(DomainResourceSchema);
InvoiceSchema.remove('id');
InvoiceSchema.add({
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
});

module.exports.InvoiceSchema = InvoiceSchema;
