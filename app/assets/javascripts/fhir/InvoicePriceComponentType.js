const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const InvoicePriceComponentTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'InvoicePriceComponentType' },
  _type: { type: String, default: 'FHIR::InvoicePriceComponentType' },
});

class InvoicePriceComponentType extends mongoose.Document {
  constructor(object) {
    super(object, InvoicePriceComponentTypeSchema);
    this.typeName = 'InvoicePriceComponentType';
    this._type = 'FHIR::InvoicePriceComponentType';
  }
}

module.exports.InvoicePriceComponentTypeSchema = InvoicePriceComponentTypeSchema;
module.exports.InvoicePriceComponentType = InvoicePriceComponentType;
