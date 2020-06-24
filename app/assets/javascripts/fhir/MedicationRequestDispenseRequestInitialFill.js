const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { DurationSchema } = require('./Duration');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationRequestDispenseRequestInitialFillSchema = BackboneElementSchemaFunction({
   quantity : SimpleQuantitySchema,
   duration : DurationSchema,
   fhirTitle: { type: String, default: 'MedicationRequestDispenseRequestInitialFill' },
});

class MedicationRequestDispenseRequestInitialFill extends mongoose.Document {
  constructor(object) {
    super(object, MedicationRequestDispenseRequestInitialFillSchema);
    this._type = 'FHIR::MedicationRequestDispenseRequestInitialFill';
  }
};


module.exports.MedicationRequestDispenseRequestInitialFillSchema = MedicationRequestDispenseRequestInitialFillSchema;
module.exports.MedicationRequestDispenseRequestInitialFill = MedicationRequestDispenseRequestInitialFill;
