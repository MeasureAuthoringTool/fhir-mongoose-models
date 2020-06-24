const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const FHIRSubstanceStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'FHIRSubstanceStatus' },
});

class FHIRSubstanceStatus extends mongoose.Document {
  constructor(object) {
    super(object, FHIRSubstanceStatusSchema);
    this._type = 'FHIR::FHIRSubstanceStatus';
  }
};


module.exports.FHIRSubstanceStatusSchema = FHIRSubstanceStatusSchema;
module.exports.FHIRSubstanceStatus = FHIRSubstanceStatus;
