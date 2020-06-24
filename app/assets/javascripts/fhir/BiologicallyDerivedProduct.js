const mongoose = require('mongoose/browser');
const { BiologicallyDerivedProductCategorySchema } = require('./BiologicallyDerivedProductCategory');
const { BiologicallyDerivedProductCollectionSchema } = require('./BiologicallyDerivedProductCollection');
const { BiologicallyDerivedProductManipulationSchema } = require('./BiologicallyDerivedProductManipulation');
const { BiologicallyDerivedProductProcessingSchema } = require('./BiologicallyDerivedProductProcessing');
const { BiologicallyDerivedProductStatusSchema } = require('./BiologicallyDerivedProductStatus');
const { BiologicallyDerivedProductStorageSchema } = require('./BiologicallyDerivedProductStorage');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BiologicallyDerivedProductSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   productCategory : BiologicallyDerivedProductCategorySchema,
   productCode : CodeableConceptSchema,
   status : BiologicallyDerivedProductStatusSchema,
   request : [ReferenceSchema],
   quantity : Number,
   parent : [ReferenceSchema],
   collection : BiologicallyDerivedProductCollectionSchema,
   processing : [BiologicallyDerivedProductProcessingSchema],
   manipulation : BiologicallyDerivedProductManipulationSchema,
   storage : [BiologicallyDerivedProductStorageSchema],
   fhirTitle: { type: String, default: 'BiologicallyDerivedProduct' },
});

class BiologicallyDerivedProduct extends mongoose.Document {
  constructor(object) {
    super(object, BiologicallyDerivedProductSchema);
    this._type = 'FHIR::BiologicallyDerivedProduct';
  }
};


module.exports.BiologicallyDerivedProductSchema = BiologicallyDerivedProductSchema;
module.exports.BiologicallyDerivedProduct = BiologicallyDerivedProduct;
