const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DurationSchema } = require('./Duration');
const { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema } = require('./MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies');
const { QuantitySchema } = require('./Quantity');
const { RatioSchema } = require('./Ratio');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductPharmaceuticalRouteOfAdministrationSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   firstDose : QuantitySchema,
   maxSingleDose : QuantitySchema,
   maxDosePerDay : QuantitySchema,
   maxDosePerTreatmentPeriod : RatioSchema,
   maxTreatmentPeriod : DurationSchema,
   targetSpecies : [MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema],
   fhirTitle: { type: String, default: 'MedicinalProductPharmaceuticalRouteOfAdministration' },
});

class MedicinalProductPharmaceuticalRouteOfAdministration extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductPharmaceuticalRouteOfAdministrationSchema);
    this._type = 'FHIR::MedicinalProductPharmaceuticalRouteOfAdministration';
  }
};


module.exports.MedicinalProductPharmaceuticalRouteOfAdministrationSchema = MedicinalProductPharmaceuticalRouteOfAdministrationSchema;
module.exports.MedicinalProductPharmaceuticalRouteOfAdministration = MedicinalProductPharmaceuticalRouteOfAdministration;
