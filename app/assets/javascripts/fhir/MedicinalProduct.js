const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MarketingStatusSchema } = require('./MarketingStatus');
const { MedicinalProductManufacturingBusinessOperationSchema } = require('./MedicinalProductManufacturingBusinessOperation');
const { MedicinalProductNameSchema } = require('./MedicinalProductName');
const { MedicinalProductSpecialDesignationSchema } = require('./MedicinalProductSpecialDesignation');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   type : CodeableConceptSchema,
   domain : CodingSchema,
   combinedPharmaceuticalDoseForm : CodeableConceptSchema,
   legalStatusOfSupply : CodeableConceptSchema,
   additionalMonitoringIndicator : CodeableConceptSchema,
   specialMeasures : [String],
   paediatricUseIndicator : CodeableConceptSchema,
   productClassification : [CodeableConceptSchema],
   marketingStatus : [MarketingStatusSchema],
   pharmaceuticalProduct : [ReferenceSchema],
   packagedMedicinalProduct : [ReferenceSchema],
   attachedDocument : [ReferenceSchema],
   masterFile : [ReferenceSchema],
   contact : [ReferenceSchema],
   clinicalTrial : [ReferenceSchema],
   name : [MedicinalProductNameSchema],
   crossReference : [IdentifierSchema],
   manufacturingBusinessOperation : [MedicinalProductManufacturingBusinessOperationSchema],
   specialDesignation : [MedicinalProductSpecialDesignationSchema],
   fhirTitle: { type: String, default: 'MedicinalProduct' },
});

class MedicinalProduct extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductSchema);
    this._type = 'FHIR::MedicinalProduct';
  }
};


module.exports.MedicinalProductSchema = MedicinalProductSchema;
module.exports.MedicinalProduct = MedicinalProduct;
