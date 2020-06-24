const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InvoiceStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'InvoiceStatus' },
});

class InvoiceStatus extends mongoose.Document {
  constructor(object) {
    super(object, InvoiceStatusSchema);
    this._type = 'FHIR::InvoiceStatus';
  }
};


module.exports.InvoiceStatusSchema = InvoiceStatusSchema;
module.exports.InvoiceStatus = InvoiceStatus;
