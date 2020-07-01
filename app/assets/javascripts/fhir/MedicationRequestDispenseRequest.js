const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { DurationSchema } = require('./Duration');
const { MedicationRequestDispenseRequestInitialFillSchema } = require('./MedicationRequestDispenseRequestInitialFill');
const { PeriodSchema } = require('./Period');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const MedicationRequestDispenseRequestSchema = BackboneElementSchemaFunction({
  initialFill: MedicationRequestDispenseRequestInitialFillSchema,
  dispenseInterval: DurationSchema,
  validityPeriod: PeriodSchema,
  numberOfRepeatsAllowed: PrimitiveUnsignedIntSchema,
  quantity: SimpleQuantitySchema,
  expectedSupplyDuration: DurationSchema,
  performer: ReferenceSchema,
  typeName: { type: String, default: 'MedicationRequestDispenseRequest' },
  _type: { type: String, default: 'FHIR::MedicationRequestDispenseRequest' },
});

class MedicationRequestDispenseRequest extends mongoose.Document {
  constructor(object) {
    super(object, MedicationRequestDispenseRequestSchema);
    this.typeName = 'MedicationRequestDispenseRequest';
    this._type = 'FHIR::MedicationRequestDispenseRequest';
  }
}

module.exports.MedicationRequestDispenseRequestSchema = MedicationRequestDispenseRequestSchema;
module.exports.MedicationRequestDispenseRequest = MedicationRequestDispenseRequest;
