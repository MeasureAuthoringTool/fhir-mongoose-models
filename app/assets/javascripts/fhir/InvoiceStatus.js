const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const InvoiceStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'InvoiceStatus' },
  _type: { type: String, default: 'FHIR::InvoiceStatus' },
});

class InvoiceStatus extends mongoose.Document {
  constructor(object) {
    super(object, InvoiceStatusSchema);
    this.typeName = 'InvoiceStatus';
    this._type = 'FHIR::InvoiceStatus';
  }
}

module.exports.InvoiceStatusSchema = InvoiceStatusSchema;
module.exports.InvoiceStatus = InvoiceStatus;
