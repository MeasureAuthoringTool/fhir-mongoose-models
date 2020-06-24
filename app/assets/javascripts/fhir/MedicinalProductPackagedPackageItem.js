const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { ProdCharacteristicSchema } = require('./ProdCharacteristic');
const { ProductShelfLifeSchema } = require('./ProductShelfLife');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductPackagedPackageItemSchema = BackboneElementSchemaFunction({
   identifier : [IdentifierSchema],
   type : CodeableConceptSchema,
   quantity : QuantitySchema,
   material : [CodeableConceptSchema],
   alternateMaterial : [CodeableConceptSchema],
   device : [ReferenceSchema],
   manufacturedItem : [ReferenceSchema],
   packageItem : [MedicinalProductPackagedPackageItemSchema],
   physicalCharacteristics : ProdCharacteristicSchema,
   otherCharacteristics : [CodeableConceptSchema],
   shelfLifeStorage : [ProductShelfLifeSchema],
   manufacturer : [ReferenceSchema],
   fhirTitle: { type: String, default: 'MedicinalProductPackagedPackageItem' },
});

class MedicinalProductPackagedPackageItem extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductPackagedPackageItemSchema);
    this._type = 'FHIR::MedicinalProductPackagedPackageItem';
  }
};


module.exports.MedicinalProductPackagedPackageItemSchema = MedicinalProductPackagedPackageItemSchema;
module.exports.MedicinalProductPackagedPackageItem = MedicinalProductPackagedPackageItem;
