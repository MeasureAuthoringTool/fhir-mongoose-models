const { BiologicallyDerivedProductCategorySchema } = require('./allSchemaHeaders.js');
const { BiologicallyDerivedProductCollectionSchema } = require('./allSchemaHeaders.js');
const { BiologicallyDerivedProductManipulationSchema } = require('./allSchemaHeaders.js');
const { BiologicallyDerivedProductProcessingSchema } = require('./allSchemaHeaders.js');
const { BiologicallyDerivedProductStatusSchema } = require('./allSchemaHeaders.js');
const { BiologicallyDerivedProductStorageSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { BiologicallyDerivedProductSchema } = require('./allSchemaHeaders.js');

BiologicallyDerivedProductSchema.add(DomainResourceSchema);
BiologicallyDerivedProductSchema.remove('id');
BiologicallyDerivedProductSchema.add({
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
});

module.exports.BiologicallyDerivedProductSchema = BiologicallyDerivedProductSchema;
