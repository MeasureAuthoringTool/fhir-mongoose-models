const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ContractStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ContractStatus' },
  _type: { type: String, default: 'FHIR::ContractStatus' },
});

class ContractStatus extends mongoose.Document {
  constructor(object) {
    super(object, ContractStatusSchema);
    this.typeName = 'ContractStatus';
    this._type = 'FHIR::ContractStatus';
  }
}

module.exports.ContractStatusSchema = ContractStatusSchema;
module.exports.ContractStatus = ContractStatus;
