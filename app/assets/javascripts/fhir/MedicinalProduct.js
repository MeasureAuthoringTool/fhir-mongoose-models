const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MarketingStatusSchema } = require('./MarketingStatus');
const { MedicinalProductManufacturingBusinessOperationSchema } = require('./MedicinalProductManufacturingBusinessOperation');
const { MedicinalProductNameSchema } = require('./MedicinalProductName');
const { MedicinalProductSpecialDesignationSchema } = require('./MedicinalProductSpecialDesignation');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'MedicinalProduct' },
  _type: { type: String, default: 'FHIR::MedicinalProduct' },
});

class MedicinalProduct extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductSchema);
    this.typeName = 'MedicinalProduct';
    this._type = 'FHIR::MedicinalProduct';
  }
}

module.exports.MedicinalProductSchema = MedicinalProductSchema;
module.exports.MedicinalProduct = MedicinalProduct;
