const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { ProdCharacteristicSchema } = require('./ProdCharacteristic');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductManufacturedSchema = DomainResourceSchemaFunction({
  manufacturedDoseForm: CodeableConceptSchema,
  unitOfPresentation: CodeableConceptSchema,
  quantity: QuantitySchema,
  manufacturer: [ReferenceSchema],
  ingredient: [ReferenceSchema],
  physicalCharacteristics: ProdCharacteristicSchema,
  otherCharacteristics: [CodeableConceptSchema],
  typeName: { type: String, default: 'MedicinalProductManufactured' },
  _type: { type: String, default: 'FHIR::MedicinalProductManufactured' },
});

class MedicinalProductManufactured extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductManufacturedSchema);
    this.typeName = 'MedicinalProductManufactured';
    this._type = 'FHIR::MedicinalProductManufactured';
  }
}

module.exports.MedicinalProductManufacturedSchema = MedicinalProductManufacturedSchema;
module.exports.MedicinalProductManufactured = MedicinalProductManufactured;
