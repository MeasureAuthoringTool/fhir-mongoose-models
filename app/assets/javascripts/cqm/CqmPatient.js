const mongoose = require('mongoose/browser');
const FHIR = require('../AllDataElements');

const CqmPatientSchema = new mongoose.Schema(
  {
    expected_values: [],
    notes: String,
    measure_ids: [String],

    fhir_patient: FHIR.PatientSchema,
    data_elements: [FHIR.DomainResourceSchema],
  },
  { id: false }
);

module.exports.CqmPatientSchema = CqmPatientSchema;

class CqmPatient extends mongoose.Document {
  constructor(object) {
    super(object, CqmPatientSchema);
  }
}

module.exports.CqmPatient = CqmPatient;
