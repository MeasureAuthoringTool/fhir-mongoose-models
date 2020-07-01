const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { IdentifierSchema } = require('./Identifier');

const MedicinalProductPackagedBatchIdentifierSchema = BackboneElementSchemaFunction({
  outerPackaging: IdentifierSchema,
  immediatePackaging: IdentifierSchema,
  typeName: { type: String, default: 'MedicinalProductPackagedBatchIdentifier' },
  _type: { type: String, default: 'FHIR::MedicinalProductPackagedBatchIdentifier' },
});

class MedicinalProductPackagedBatchIdentifier extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductPackagedBatchIdentifierSchema);
    this.typeName = 'MedicinalProductPackagedBatchIdentifier';
    this._type = 'FHIR::MedicinalProductPackagedBatchIdentifier';
  }
}

module.exports.MedicinalProductPackagedBatchIdentifierSchema = MedicinalProductPackagedBatchIdentifierSchema;
module.exports.MedicinalProductPackagedBatchIdentifier = MedicinalProductPackagedBatchIdentifier;
