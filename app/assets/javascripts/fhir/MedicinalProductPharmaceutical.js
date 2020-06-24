const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MedicinalProductPharmaceuticalCharacteristicsSchema } = require('./MedicinalProductPharmaceuticalCharacteristics');
const { MedicinalProductPharmaceuticalRouteOfAdministrationSchema } = require('./MedicinalProductPharmaceuticalRouteOfAdministration');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductPharmaceuticalSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   administrableDoseForm : CodeableConceptSchema,
   unitOfPresentation : CodeableConceptSchema,
   ingredient : [ReferenceSchema],
   device : [ReferenceSchema],
   characteristics : [MedicinalProductPharmaceuticalCharacteristicsSchema],
   routeOfAdministration : [MedicinalProductPharmaceuticalRouteOfAdministrationSchema],
   fhirTitle: { type: String, default: 'MedicinalProductPharmaceutical' },
});

class MedicinalProductPharmaceutical extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductPharmaceuticalSchema);
    this._type = 'FHIR::MedicinalProductPharmaceutical';
  }
};


module.exports.MedicinalProductPharmaceuticalSchema = MedicinalProductPharmaceuticalSchema;
module.exports.MedicinalProductPharmaceutical = MedicinalProductPharmaceutical;
