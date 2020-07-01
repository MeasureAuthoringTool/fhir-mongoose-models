const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { ProdCharacteristicSchema } = require('./ProdCharacteristic');
const { ProductShelfLifeSchema } = require('./ProductShelfLife');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductPackagedPackageItemSchema = BackboneElementSchemaFunction({
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
  typeName: { type: String, default: 'MedicinalProductPackagedPackageItem' },
  _type: { type: String, default: 'FHIR::MedicinalProductPackagedPackageItem' },
});

class MedicinalProductPackagedPackageItem extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductPackagedPackageItemSchema);
    this.typeName = 'MedicinalProductPackagedPackageItem';
    this._type = 'FHIR::MedicinalProductPackagedPackageItem';
  }
}

module.exports.MedicinalProductPackagedPackageItemSchema = MedicinalProductPackagedPackageItemSchema;
module.exports.MedicinalProductPackagedPackageItem = MedicinalProductPackagedPackageItem;
