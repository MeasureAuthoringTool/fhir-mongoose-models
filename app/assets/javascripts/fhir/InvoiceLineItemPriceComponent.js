const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { InvoicePriceComponentTypeSchema } = require('./InvoicePriceComponentType');
const { MoneySchema } = require('./Money');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InvoiceLineItemPriceComponentSchema = BackboneElementSchemaFunction({
   type : InvoicePriceComponentTypeSchema,
   code : CodeableConceptSchema,
   factor : Number,
   amount : MoneySchema,
   fhirTitle: { type: String, default: 'InvoiceLineItemPriceComponent' },
});

class InvoiceLineItemPriceComponent extends mongoose.Document {
  constructor(object) {
    super(object, InvoiceLineItemPriceComponentSchema);
    this._type = 'FHIR::InvoiceLineItemPriceComponent';
  }
};


module.exports.InvoiceLineItemPriceComponentSchema = InvoiceLineItemPriceComponentSchema;
module.exports.InvoiceLineItemPriceComponent = InvoiceLineItemPriceComponent;
