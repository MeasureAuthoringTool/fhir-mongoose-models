const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { InvoiceLineItemPriceComponentSchema } = require('./InvoiceLineItemPriceComponent');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InvoiceLineItemSchema = BackboneElementSchemaFunction({
   sequence : Number,
   chargeItemReference : ReferenceSchema,
   chargeItemCodeableConcept : CodeableConceptSchema,
   priceComponent : [InvoiceLineItemPriceComponentSchema],
   fhirTitle: { type: String, default: 'InvoiceLineItem' },
});

class InvoiceLineItem extends mongoose.Document {
  constructor(object) {
    super(object, InvoiceLineItemSchema);
    this._type = 'FHIR::InvoiceLineItem';
  }
};


module.exports.InvoiceLineItemSchema = InvoiceLineItemSchema;
module.exports.InvoiceLineItem = InvoiceLineItem;
