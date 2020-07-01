const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { ReferenceSchema } = require('./Reference');
const { SignatureSchema } = require('./Signature');

const ContractSignerSchema = BackboneElementSchemaFunction({
  type: CodingSchema,
  party: ReferenceSchema,
  signature: [SignatureSchema],
  typeName: { type: String, default: 'ContractSigner' },
  _type: { type: String, default: 'FHIR::ContractSigner' },
});

class ContractSigner extends mongoose.Document {
  constructor(object) {
    super(object, ContractSignerSchema);
    this.typeName = 'ContractSigner';
    this._type = 'FHIR::ContractSigner';
  }
}

module.exports.ContractSignerSchema = ContractSignerSchema;
module.exports.ContractSigner = ContractSigner;
