const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { DurationSchema } = require('./Duration');
const { MedicationRequestDispenseRequestInitialFillSchema } = require('./MedicationRequestDispenseRequestInitialFill');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationRequestDispenseRequestSchema = BackboneElementSchemaFunction({
   initialFill : MedicationRequestDispenseRequestInitialFillSchema,
   dispenseInterval : DurationSchema,
   validityPeriod : PeriodSchema,
   numberOfRepeatsAllowed : Number,
   quantity : SimpleQuantitySchema,
   expectedSupplyDuration : DurationSchema,
   performer : ReferenceSchema,
   fhirTitle: { type: String, default: 'MedicationRequestDispenseRequest' },
});

class MedicationRequestDispenseRequest extends mongoose.Document {
  constructor(object) {
    super(object, MedicationRequestDispenseRequestSchema);
    this._type = 'FHIR::MedicationRequestDispenseRequest';
  }
};


module.exports.MedicationRequestDispenseRequestSchema = MedicationRequestDispenseRequestSchema;
module.exports.MedicationRequestDispenseRequest = MedicationRequestDispenseRequest;
