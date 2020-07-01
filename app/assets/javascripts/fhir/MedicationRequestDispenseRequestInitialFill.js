const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { DurationSchema } = require('./Duration');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const MedicationRequestDispenseRequestInitialFillSchema = BackboneElementSchemaFunction({
  quantity: SimpleQuantitySchema,
  duration: DurationSchema,
  typeName: { type: String, default: 'MedicationRequestDispenseRequestInitialFill' },
  _type: { type: String, default: 'FHIR::MedicationRequestDispenseRequestInitialFill' },
});

class MedicationRequestDispenseRequestInitialFill extends mongoose.Document {
  constructor(object) {
    super(object, MedicationRequestDispenseRequestInitialFillSchema);
    this.typeName = 'MedicationRequestDispenseRequestInitialFill';
    this._type = 'FHIR::MedicationRequestDispenseRequestInitialFill';
  }
}

module.exports.MedicationRequestDispenseRequestInitialFillSchema = MedicationRequestDispenseRequestInitialFillSchema;
module.exports.MedicationRequestDispenseRequestInitialFill = MedicationRequestDispenseRequestInitialFill;
