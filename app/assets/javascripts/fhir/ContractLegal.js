const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');

const ContractLegalSchema = BackboneElementSchemaFunction({
  contentAttachment: AttachmentSchema,
  contentReference: ReferenceSchema,
  typeName: { type: String, default: 'ContractLegal' },
  _type: { type: String, default: 'FHIR::ContractLegal' },
});

class ContractLegal extends mongoose.Document {
  constructor(object) {
    super(object, ContractLegalSchema);
    this.typeName = 'ContractLegal';
    this._type = 'FHIR::ContractLegal';
  }
}

module.exports.ContractLegalSchema = ContractLegalSchema;
module.exports.ContractLegal = ContractLegal;
