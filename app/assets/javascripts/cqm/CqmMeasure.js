const mongoose = require('mongoose/browser');
const FHIR = require('../AllDataElements');

const CqmMeasureSchema = new mongoose.Schema(
  {
    set_id: String,
    calculation_method: {
      type: String,
      enum: ['PATIENT', 'EPISODE_OF_CARE'],
      default: 'PATIENT',
    },
    calculate_sdes: Boolean,
    fhir_measure: FHIR.MeasureSchema,
    libraries: [FHIR.LibrarySchema],
    value_sets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ValueSet' }],
    source_data_criteria: [],

    package: { type: mongoose.Schema.Types.ObjectId, ref: 'MeasurePackage' }, // Bonnie-specific
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, // These are the Mongoid conventions for timestamps
  }
);

module.exports.CqmMeasureSchema = CqmMeasureSchema;
class CqmMeasure extends mongoose.Document {
  constructor(object) {
    super(object, CqmMeasureSchema);
  }
}
module.exports.CqmMeasure = CqmMeasure;
