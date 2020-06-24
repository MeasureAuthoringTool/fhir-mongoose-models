const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContractLegalSchema = BackboneElementSchemaFunction({
   contentAttachment : AttachmentSchema,
   contentReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'ContractLegal' },
});

class ContractLegal extends mongoose.Document {
  constructor(object) {
    super(object, ContractLegalSchema);
    this._type = 'FHIR::ContractLegal';
  }
};


module.exports.ContractLegalSchema = ContractLegalSchema;
module.exports.ContractLegal = ContractLegal;
