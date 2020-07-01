const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');

const ContractRuleSchema = BackboneElementSchemaFunction({
  contentAttachment: AttachmentSchema,
  contentReference: ReferenceSchema,
  typeName: { type: String, default: 'ContractRule' },
  _type: { type: String, default: 'FHIR::ContractRule' },
});

class ContractRule extends mongoose.Document {
  constructor(object) {
    super(object, ContractRuleSchema);
    this.typeName = 'ContractRule';
    this._type = 'FHIR::ContractRule';
  }
}

module.exports.ContractRuleSchema = ContractRuleSchema;
module.exports.ContractRule = ContractRule;
