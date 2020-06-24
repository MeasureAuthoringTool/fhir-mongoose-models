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

const ContractRuleSchema = BackboneElementSchemaFunction({
   contentAttachment : AttachmentSchema,
   contentReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'ContractRule' },
});

class ContractRule extends mongoose.Document {
  constructor(object) {
    super(object, ContractRuleSchema);
    this._type = 'FHIR::ContractRule';
  }
};


module.exports.ContractRuleSchema = ContractRuleSchema;
module.exports.ContractRule = ContractRule;
