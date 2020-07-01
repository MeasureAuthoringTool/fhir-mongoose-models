const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ContractPublicationStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ContractPublicationStatus' },
  _type: { type: String, default: 'FHIR::ContractPublicationStatus' },
});

class ContractPublicationStatus extends mongoose.Document {
  constructor(object) {
    super(object, ContractPublicationStatusSchema);
    this.typeName = 'ContractPublicationStatus';
    this._type = 'FHIR::ContractPublicationStatus';
  }
}

module.exports.ContractPublicationStatusSchema = ContractPublicationStatusSchema;
module.exports.ContractPublicationStatus = ContractPublicationStatus;
