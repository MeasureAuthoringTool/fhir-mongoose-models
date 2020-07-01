const mongoose = require('mongoose/browser');
const { BiologicallyDerivedProductCategorySchema } = require('./BiologicallyDerivedProductCategory');
const { BiologicallyDerivedProductCollectionSchema } = require('./BiologicallyDerivedProductCollection');
const { BiologicallyDerivedProductManipulationSchema } = require('./BiologicallyDerivedProductManipulation');
const { BiologicallyDerivedProductProcessingSchema } = require('./BiologicallyDerivedProductProcessing');
const { BiologicallyDerivedProductStatusSchema } = require('./BiologicallyDerivedProductStatus');
const { BiologicallyDerivedProductStorageSchema } = require('./BiologicallyDerivedProductStorage');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { ReferenceSchema } = require('./Reference');

const BiologicallyDerivedProductSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  productCategory: BiologicallyDerivedProductCategorySchema,
  productCode: CodeableConceptSchema,
  status: BiologicallyDerivedProductStatusSchema,
  request: [ReferenceSchema],
  quantity: PrimitiveIntegerSchema,
  parent: [ReferenceSchema],
  _collection: BiologicallyDerivedProductCollectionSchema,
  processing: [BiologicallyDerivedProductProcessingSchema],
  manipulation: BiologicallyDerivedProductManipulationSchema,
  storage: [BiologicallyDerivedProductStorageSchema],
  typeName: { type: String, default: 'BiologicallyDerivedProduct' },
  _type: { type: String, default: 'FHIR::BiologicallyDerivedProduct' },
});

class BiologicallyDerivedProduct extends mongoose.Document {
  constructor(object) {
    super(object, BiologicallyDerivedProductSchema);
    this.typeName = 'BiologicallyDerivedProduct';
    this._type = 'FHIR::BiologicallyDerivedProduct';
  }
}

module.exports.BiologicallyDerivedProductSchema = BiologicallyDerivedProductSchema;
module.exports.BiologicallyDerivedProduct = BiologicallyDerivedProduct;
