const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { QuantitySchema } = require('./Quantity');

const MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema = BackboneElementSchemaFunction({
  tissue: CodeableConceptSchema,
  value: QuantitySchema,
  supportingInformation: PrimitiveStringSchema,
  typeName: { type: String, default: 'MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod' },
  _type: { type: String, default: 'FHIR::MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod' },
});

class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema);
    this.typeName = 'MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod';
    this._type = 'FHIR::MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod';
  }
}

module.exports.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema = MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema;
module.exports.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod = MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
