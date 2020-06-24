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

const ContractFriendlySchema = BackboneElementSchemaFunction({
   contentAttachment : AttachmentSchema,
   contentReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'ContractFriendly' },
});

class ContractFriendly extends mongoose.Document {
  constructor(object) {
    super(object, ContractFriendlySchema);
    this._type = 'FHIR::ContractFriendly';
  }
};


module.exports.ContractFriendlySchema = ContractFriendlySchema;
module.exports.ContractFriendly = ContractFriendly;
