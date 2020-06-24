const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MarketingStatusSchema } = require('./MarketingStatus');
const { MedicinalProductPackagedBatchIdentifierSchema } = require('./MedicinalProductPackagedBatchIdentifier');
const { MedicinalProductPackagedPackageItemSchema } = require('./MedicinalProductPackagedPackageItem');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductPackagedSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   subject : [ReferenceSchema],
   description : String,
   legalStatusOfSupply : CodeableConceptSchema,
   marketingStatus : [MarketingStatusSchema],
   marketingAuthorization : ReferenceSchema,
   manufacturer : [ReferenceSchema],
   batchIdentifier : [MedicinalProductPackagedBatchIdentifierSchema],
   packageItem : [MedicinalProductPackagedPackageItemSchema],
   fhirTitle: { type: String, default: 'MedicinalProductPackaged' },
});

class MedicinalProductPackaged extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductPackagedSchema);
    this._type = 'FHIR::MedicinalProductPackaged';
  }
};


module.exports.MedicinalProductPackagedSchema = MedicinalProductPackagedSchema;
module.exports.MedicinalProductPackaged = MedicinalProductPackaged;
