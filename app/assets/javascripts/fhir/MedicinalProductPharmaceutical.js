const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductPharmaceuticalCharacteristicsSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductPharmaceuticalRouteOfAdministrationSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductPharmaceuticalSchema } = require('./allSchemaHeaders.js');

MedicinalProductPharmaceuticalSchema.add(DomainResourceSchema);
MedicinalProductPharmaceuticalSchema.remove('id');
MedicinalProductPharmaceuticalSchema.add({
  identifier: [IdentifierSchema],
  administrableDoseForm: CodeableConceptSchema,
  unitOfPresentation: CodeableConceptSchema,
  ingredient: [ReferenceSchema],
  device: [ReferenceSchema],
  characteristics: [MedicinalProductPharmaceuticalCharacteristicsSchema],
  routeOfAdministration: [MedicinalProductPharmaceuticalRouteOfAdministrationSchema],
});

module.exports.MedicinalProductPharmaceuticalSchema = MedicinalProductPharmaceuticalSchema;
