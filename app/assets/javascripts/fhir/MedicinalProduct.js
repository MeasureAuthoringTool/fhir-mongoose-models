const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MarketingStatusSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductManufacturingBusinessOperationSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductNameSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductSpecialDesignationSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductSchema } = require('./allSchemaHeaders.js');

MedicinalProductSchema.add(DomainResourceSchema);
MedicinalProductSchema.remove('id');
MedicinalProductSchema.add({
  identifier: [IdentifierSchema],
  type: CodeableConceptSchema,
  domain: CodingSchema,
  combinedPharmaceuticalDoseForm: CodeableConceptSchema,
  legalStatusOfSupply: CodeableConceptSchema,
  additionalMonitoringIndicator: CodeableConceptSchema,
  specialMeasures: [PrimitiveStringSchema],
  paediatricUseIndicator: CodeableConceptSchema,
  productClassification: [CodeableConceptSchema],
  marketingStatus: [MarketingStatusSchema],
  pharmaceuticalProduct: [ReferenceSchema],
  packagedMedicinalProduct: [ReferenceSchema],
  attachedDocument: [ReferenceSchema],
  masterFile: [ReferenceSchema],
  contact: [ReferenceSchema],
  clinicalTrial: [ReferenceSchema],
  name: [MedicinalProductNameSchema],
  crossReference: [IdentifierSchema],
  manufacturingBusinessOperation: [MedicinalProductManufacturingBusinessOperationSchema],
  specialDesignation: [MedicinalProductSpecialDesignationSchema],
});

module.exports.MedicinalProductSchema = MedicinalProductSchema;
