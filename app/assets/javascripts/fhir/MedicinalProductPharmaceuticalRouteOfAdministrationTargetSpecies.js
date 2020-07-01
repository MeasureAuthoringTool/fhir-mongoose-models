const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema } = require('./MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod');

const MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  withdrawalPeriod: [MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema],
  typeName: { type: String, default: 'MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies' },
  _type: { type: String, default: 'FHIR::MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies' },
});

class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema);
    this.typeName = 'MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies';
    this._type = 'FHIR::MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies';
  }
}

module.exports.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema = MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema;
module.exports.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies = MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies;
