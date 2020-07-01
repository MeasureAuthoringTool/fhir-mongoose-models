const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const ContractTermAssetContextSchema = BackboneElementSchemaFunction({
  reference: ReferenceSchema,
  code: [CodeableConceptSchema],
  text: PrimitiveStringSchema,
  typeName: { type: String, default: 'ContractTermAssetContext' },
  _type: { type: String, default: 'FHIR::ContractTermAssetContext' },
});

class ContractTermAssetContext extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermAssetContextSchema);
    this.typeName = 'ContractTermAssetContext';
    this._type = 'FHIR::ContractTermAssetContext';
  }
}

module.exports.ContractTermAssetContextSchema = ContractTermAssetContextSchema;
module.exports.ContractTermAssetContext = ContractTermAssetContext;
