const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InvoicePriceComponentTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'InvoicePriceComponentType' },
});

class InvoicePriceComponentType extends mongoose.Document {
  constructor(object) {
    super(object, InvoicePriceComponentTypeSchema);
    this._type = 'FHIR::InvoicePriceComponentType';
  }
};


module.exports.InvoicePriceComponentTypeSchema = InvoicePriceComponentTypeSchema;
module.exports.InvoicePriceComponentType = InvoicePriceComponentType;
