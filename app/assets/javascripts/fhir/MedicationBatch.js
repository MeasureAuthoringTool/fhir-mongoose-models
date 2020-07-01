const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const MedicationBatchSchema = BackboneElementSchemaFunction({
  lotNumber: PrimitiveStringSchema,
  expirationDate: PrimitiveDateTimeSchema,
  typeName: { type: String, default: 'MedicationBatch' },
  _type: { type: String, default: 'FHIR::MedicationBatch' },
});

class MedicationBatch extends mongoose.Document {
  constructor(object) {
    super(object, MedicationBatchSchema);
    this.typeName = 'MedicationBatch';
    this._type = 'FHIR::MedicationBatch';
  }
}

module.exports.MedicationBatchSchema = MedicationBatchSchema;
module.exports.MedicationBatch = MedicationBatch;
