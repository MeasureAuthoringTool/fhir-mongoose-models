const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductPharmaceuticalCharacteristicsSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   status : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'MedicinalProductPharmaceuticalCharacteristics' },
});

class MedicinalProductPharmaceuticalCharacteristics extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductPharmaceuticalCharacteristicsSchema);
    this._type = 'FHIR::MedicinalProductPharmaceuticalCharacteristics';
  }
};


module.exports.MedicinalProductPharmaceuticalCharacteristicsSchema = MedicinalProductPharmaceuticalCharacteristicsSchema;
module.exports.MedicinalProductPharmaceuticalCharacteristics = MedicinalProductPharmaceuticalCharacteristics;
