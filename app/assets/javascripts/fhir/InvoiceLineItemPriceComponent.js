const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { InvoicePriceComponentTypeSchema } = require('./InvoicePriceComponentType');
const { MoneySchema } = require('./Money');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');

const InvoiceLineItemPriceComponentSchema = BackboneElementSchemaFunction({
  type: InvoicePriceComponentTypeSchema,
  code: CodeableConceptSchema,
  factor: PrimitiveDecimalSchema,
  amount: MoneySchema,
  typeName: { type: String, default: 'InvoiceLineItemPriceComponent' },
  _type: { type: String, default: 'FHIR::InvoiceLineItemPriceComponent' },
});

class InvoiceLineItemPriceComponent extends mongoose.Document {
  constructor(object) {
    super(object, InvoiceLineItemPriceComponentSchema);
    this.typeName = 'InvoiceLineItemPriceComponent';
    this._type = 'FHIR::InvoiceLineItemPriceComponent';
  }
}

module.exports.InvoiceLineItemPriceComponentSchema = InvoiceLineItemPriceComponentSchema;
module.exports.InvoiceLineItemPriceComponent = InvoiceLineItemPriceComponent;
