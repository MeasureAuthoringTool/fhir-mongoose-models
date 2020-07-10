const mongoose = require('mongoose/browser');
const FHIR = require('../AllDataElements');

const CqmValueSetSchema = new mongoose.Schema(
  {
    fhirValueSet: [FHIR.ValueSetSchema],
  },
  // Options
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

module.exports.CqmValueSetSchema = CqmValueSetSchema;

class CqmValueSet extends mongoose.Document {
  constructor(object) {
    super(object, CqmValueSetSchema);
  }
}

module.exports.CqmValueSet = CqmValueSet;
