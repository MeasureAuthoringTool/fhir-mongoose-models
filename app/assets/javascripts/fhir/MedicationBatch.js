const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationBatchSchema = BackboneElementSchemaFunction({
   lotNumber : String,
   expirationDate : DateTime,
   fhirTitle: { type: String, default: 'MedicationBatch' },
});

class MedicationBatch extends mongoose.Document {
  constructor(object) {
    super(object, MedicationBatchSchema);
    this._type = 'FHIR::MedicationBatch';
  }
};


module.exports.MedicationBatchSchema = MedicationBatchSchema;
module.exports.MedicationBatch = MedicationBatch;
