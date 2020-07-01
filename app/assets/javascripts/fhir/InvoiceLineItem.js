const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { InvoiceLineItemPriceComponentSchema } = require('./InvoiceLineItemPriceComponent');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');

const InvoiceLineItemSchema = BackboneElementSchemaFunction({
  sequence: PrimitivePositiveIntSchema,
  chargeItemReference: ReferenceSchema,
  chargeItemCodeableConcept: CodeableConceptSchema,
  priceComponent: [InvoiceLineItemPriceComponentSchema],
  typeName: { type: String, default: 'InvoiceLineItem' },
  _type: { type: String, default: 'FHIR::InvoiceLineItem' },
});

class InvoiceLineItem extends mongoose.Document {
  constructor(object) {
    super(object, InvoiceLineItemSchema);
    this.typeName = 'InvoiceLineItem';
    this._type = 'FHIR::InvoiceLineItem';
  }
}

module.exports.InvoiceLineItemSchema = InvoiceLineItemSchema;
module.exports.InvoiceLineItem = InvoiceLineItem;
