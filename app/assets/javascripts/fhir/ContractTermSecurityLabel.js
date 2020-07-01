const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');

const ContractTermSecurityLabelSchema = BackboneElementSchemaFunction({
  number: [PrimitiveUnsignedIntSchema],
  classification: CodingSchema,
  category: [CodingSchema],
  control: [CodingSchema],
  typeName: { type: String, default: 'ContractTermSecurityLabel' },
  _type: { type: String, default: 'FHIR::ContractTermSecurityLabel' },
});

class ContractTermSecurityLabel extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermSecurityLabelSchema);
    this.typeName = 'ContractTermSecurityLabel';
    this._type = 'FHIR::ContractTermSecurityLabel';
  }
}

module.exports.ContractTermSecurityLabelSchema = ContractTermSecurityLabelSchema;
module.exports.ContractTermSecurityLabel = ContractTermSecurityLabel;
