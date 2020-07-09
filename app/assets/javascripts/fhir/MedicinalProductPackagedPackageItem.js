const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ProdCharacteristicSchema } = require('./allSchemaHeaders.js');
const { ProductShelfLifeSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductPackagedPackageItemSchema } = require('./allSchemaHeaders.js');

MedicinalProductPackagedPackageItemSchema.add(BackboneElementSchema);
MedicinalProductPackagedPackageItemSchema.remove('id');
MedicinalProductPackagedPackageItemSchema.add({
  identifier: [IdentifierSchema],
  type: CodeableConceptSchema,
  quantity: QuantitySchema,
  material: [CodeableConceptSchema],
  alternateMaterial: [CodeableConceptSchema],
  device: [ReferenceSchema],
  manufacturedItem: [ReferenceSchema],
  packageItem: [MedicinalProductPackagedPackageItemSchema],
  physicalCharacteristics: ProdCharacteristicSchema,
  otherCharacteristics: [CodeableConceptSchema],
  shelfLifeStorage: [ProductShelfLifeSchema],
  manufacturer: [ReferenceSchema],
});

module.exports.MedicinalProductPackagedPackageItemSchema = MedicinalProductPackagedPackageItemSchema;
