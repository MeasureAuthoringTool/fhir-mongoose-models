const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');

const ContractFriendlySchema = BackboneElementSchemaFunction({
  contentAttachment: AttachmentSchema,
  contentReference: ReferenceSchema,
  typeName: { type: String, default: 'ContractFriendly' },
  _type: { type: String, default: 'FHIR::ContractFriendly' },
});

class ContractFriendly extends mongoose.Document {
  constructor(object) {
    super(object, ContractFriendlySchema);
    this.typeName = 'ContractFriendly';
    this._type = 'FHIR::ContractFriendly';
  }
}

module.exports.ContractFriendlySchema = ContractFriendlySchema;
module.exports.ContractFriendly = ContractFriendly;
