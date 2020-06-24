const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema } = require('./MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   withdrawalPeriod : [MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema],
   fhirTitle: { type: String, default: 'MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies' },
});

class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema);
    this._type = 'FHIR::MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies';
  }
};


module.exports.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema = MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema;
module.exports.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies = MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies;
