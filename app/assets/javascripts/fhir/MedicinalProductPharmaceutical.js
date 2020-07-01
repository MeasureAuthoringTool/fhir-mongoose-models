const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MedicinalProductPharmaceuticalCharacteristicsSchema } = require('./MedicinalProductPharmaceuticalCharacteristics');
const { MedicinalProductPharmaceuticalRouteOfAdministrationSchema } = require('./MedicinalProductPharmaceuticalRouteOfAdministration');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductPharmaceuticalSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  administrableDoseForm: CodeableConceptSchema,
  unitOfPresentation: CodeableConceptSchema,
  ingredient: [ReferenceSchema],
  device: [ReferenceSchema],
  characteristics: [MedicinalProductPharmaceuticalCharacteristicsSchema],
  routeOfAdministration: [MedicinalProductPharmaceuticalRouteOfAdministrationSchema],
  typeName: { type: String, default: 'MedicinalProductPharmaceutical' },
  _type: { type: String, default: 'FHIR::MedicinalProductPharmaceutical' },
});

class MedicinalProductPharmaceutical extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductPharmaceuticalSchema);
    this.typeName = 'MedicinalProductPharmaceutical';
    this._type = 'FHIR::MedicinalProductPharmaceutical';
  }
}

module.exports.MedicinalProductPharmaceuticalSchema = MedicinalProductPharmaceuticalSchema;
module.exports.MedicinalProductPharmaceutical = MedicinalProductPharmaceutical;
